import { CurrentExchangeProps } from "../context/DashboardContext/interfaces/interfaces";

interface pricesProps {
  [key: string]: {
    [key: string]: number;
  };
}

export const formatExchange = (
  data: CurrentExchangeProps,
  prices: pricesProps
) => {
  const formattedExchange = {
    formatted_amount_sent: formatAmount(
      data.amount_sent,
      data.currency_sent,
      "$"
    ),
    exchange_rate: formatExchangeRate(data, prices),
    formatted_amount_received: formatAmount(
      data.amount_received,
      data.currency_received,
      ""
    ),
  };
  return formattedExchange;
};

export const formatAmount = (
  amount: number,
  currency: string,
  textSymbol: string
) => {
  // const numeroFormateado = new Intl.NumberFormat("es-ES", {
  //   maximumFractionDigits: 20,
  // }).format(parseFloat(amount));
  const formattedAmount = `${textSymbol} ${amount} ${currency.toUpperCase()}`;
  return formattedAmount;
};

export const formatExchangeRate = (
  data: CurrentExchangeProps,
  prices: pricesProps
) => {
  const isSentMajor = data.amount_sent > data.amount_received ? true : false;

  const currencyRate = isSentMajor
    ? data.currency_received
    : data.currency_sent;

  const currencyRateChange = !isSentMajor
    ? data.currency_received
    : data.currency_sent;

  const priceRate = isSentMajor
    ? 1 / prices[data.currency_sent][`${data.currency_received}_sell`]//`${currency_received}_sell`
    : prices[data.currency_sent][`${data.currency_received}_sell`];

  return `1 ${currencyRate.toUpperCase()} = ${priceRate} ${currencyRateChange.toUpperCase()}`;
};
