import { createContext } from "react";
import {
  CurrentExchangeProps,
  FormatCurrentExchangeProps,
} from "./interfaces/interfaces";

type DashboardContextType = {
  balance?: any;
  history?: any;
  prices?: any;
  currentExchange?: CurrentExchangeProps;
  formatCurrentExchange?: FormatCurrentExchangeProps;
  // profile?: any;
  // tiempoRestante;
  // precios;
  getBalance: () => void;
  getHistory: () => void;
  getPrices: () => void;
  setCurrentExchange: (data: any, prices: any) => void;
  postExchange: (
    currency_sent: string,
    currency_received: string,
    amount_sent: number
  ) => void;
};

export const DashboardContext = createContext({} as DashboardContextType);
