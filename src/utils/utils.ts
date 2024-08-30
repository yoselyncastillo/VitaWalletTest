//get amount_received
export const calculateByAmountSent = (
  priceInUse: any,
  amount_sent: any,
  currency_received: any
) => {
  return parseFloat(amount_sent) * priceInUse[`${currency_received}_sell`];
};

//amount_sent
export const calculateByAmountReceived = (
  priceInUse: any,
  amount_received: any,
  currency_received: any
) => {
  return parseFloat(amount_received) / priceInUse[`${currency_received}_sell`];
};
