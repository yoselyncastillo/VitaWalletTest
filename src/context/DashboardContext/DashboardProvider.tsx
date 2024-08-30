import { ReactNode, useContext, useEffect, useReducer } from "react";
import { DashboardContext } from "./DashboardContext";
import { dashboardReducer } from "./dashboardReducer";
import { DashboardState } from "./interfaces/interfaces";
import {
  balanceApi,
  exchangeAPI,
  historyApi,
  pricesApi,
} from "./services/DashboardServices";
import { DashboardAction } from "./actions/DashboardActions";
import { AuthContext } from "../AuthContext";
import { formatExchange } from "../../utils/formatters";
import { createCountdown } from "../../dashboard/hooks/useCountDown";
// import useCountdown from "../../dashboard/hooks/useCountDown";

// const init = () => {
//   const balances = JSON.parse(localStorage.getItem("balances"));

//   return {
//     balances,
//   };
// };

const initialState: DashboardState = {
  balance: {},
};

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardState, dispatch] = useReducer(dashboardReducer, initialState);
  const { headers } = useContext(AuthContext);

  const { prices } = dashboardState;

  useEffect(() => {
    const expirationDate = prices ? prices.valid_until : new Date();
    if (expirationDate) {
      const stopCountdown = createCountdown(expirationDate, () => {
        getPrices();
      });

      return () => {
        stopCountdown();
      };
    }
  }, [prices, createCountdown]);

  const getBalance = async () => {
    if (headers) {
      const balance = await balanceApi(headers);

      if (balance) {
        const payload = {
          balance: balance,
        };

        const action: DashboardAction = { type: "getBalance", payload };

        dispatch(action);
      }
    }
  };

  const getHistory = async () => {
    if (headers) {
      const history = await historyApi(headers);

      if (history) {
        const payload = {
          history: history,
        };

        const action: DashboardAction = { type: "getHistory", payload };

        dispatch(action);
      }
    }
  };

  const getPrices = async () => {
    if (headers) {
      const prices = await pricesApi(headers);

      if (prices) {
        const payload = {
          prices: prices,
        };

        const action: DashboardAction = { type: "getPrices", payload };

        dispatch(action);
      }
    }
  };
  const postExchange = async (
    currency_sent: string,
    currency_received: string,
    amount_sent: number
  ) => {
    try {
      const exchange = await exchangeAPI(
        headers!,
        currency_sent,
        currency_received,
        amount_sent
      );
      return exchange;
    } catch (error) {
      console.error("Error al realizar el intercambio:", error);
      return "Ha ocurrido un error al realizar el intercambio.";
    }
  };

  interface dataExchange {
    currency_sent: string;
    currency_received: string;
    amount_sent: string;
    amount_received: string;
  }

  interface pricesProps {
    [key: string]: {
      [key: string]: number;
    };
  }

  const setCurrentExchange = (data: dataExchange, prices: pricesProps) => {
    const setCurrentPayload = {
      amount_sent: parseFloat(data.amount_sent),
      amount_received: parseFloat(data.amount_sent),
      currency_sent: data.currency_sent,
      currency_received: data.currency_received,
    };

    const formattedData = formatExchange(setCurrentPayload, prices);

    const formatPayload = {
      ...formattedData,
    };

    const setcurrentAction: DashboardAction = {
      type: "setCurrentExchange",
      payload: setCurrentPayload,
    };
    const formatAction: DashboardAction = {
      type: "formatCurrentExchange",
      payload: formatPayload,
    };
    dispatch(setcurrentAction);
    dispatch(formatAction);
  };

  return (
    <DashboardContext.Provider
      value={{
        ...dashboardState,
        getBalance,
        getHistory,
        getPrices,
        setCurrentExchange,
        postExchange,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
