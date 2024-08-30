import { DashboardAction } from "./actions/DashboardActions";
import { DashboardState } from "./interfaces/interfaces";

export const dashboardReducer = (
  state: DashboardState,
  action: DashboardAction
) => {
  switch (action.type) {
    case "getBalance":
      return {
        ...state,
        balance: action.payload.balance,
      };
    case "getHistory":
      return {
        ...state,
        history: action.payload.history,
      };
    case "getPrices":
      return {
        ...state,
        prices: action.payload.prices,
      };
    case "setCurrentExchange":
      return {
        ...state,
        currentExchange: {
          amount_sent: action.payload.amount_sent,
          amount_received: action.payload.amount_received,
          currency_received: action.payload.currency_received,
          currency_sent: action.payload.currency_sent,
        },
      };
    case "formatCurrentExchange":
      return {
        ...state,
        formatCurrentExchange: {
          exchange_rate: action.payload.exchange_rate,
          formatted_amount_received: action.payload.formatted_amount_received,
          formatted_amount_sent: action.payload.formatted_amount_sent,
        },
      };
    default:
      return state;
  }
};
