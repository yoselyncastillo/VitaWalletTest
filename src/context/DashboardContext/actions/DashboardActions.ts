// import { HeadersProps, UserdataProp } from "../interfaces/interfaces";

export type DashboardAction =
  | {
      type: "getBalance";
      payload: { balance: any };
    }
  | {
      type: "getHistory";
      payload: { history: any };
    }
  | {
      type: "getPrices";
      payload: { prices: any };
    }
  | {
      type: "setCurrentExchange";
      payload: {
        amount_sent: number;
        amount_received: number;
        currency_sent: string;
        currency_received: string;
      };
    }
  | {
      type: "formatCurrentExchange";
      payload: {
        exchange_rate: string;
        formatted_amount_received: string;
        formatted_amount_sent: string;
      };
    }
  | { type: "logout" };
