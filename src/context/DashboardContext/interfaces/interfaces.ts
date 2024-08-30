export interface DashboardState {
  balance?: any;
  history?: any;
  prices?: any;
  currentExchange?: CurrentExchangeProps;
}

export interface CurrentExchangeProps {
  amount_sent: number;
  amount_received: number;
  currency_received: string;
  currency_sent: string;
}
export interface FormatCurrentExchangeProps {
  exchange_rate: string;
  formatted_amount_received: string;
  formatted_amount_sent: string;
}
