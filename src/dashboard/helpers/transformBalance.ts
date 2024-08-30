import { BalanceCardProps } from "../../interfaces/BalanceCard";
import { IconNames } from "../../interfaces/Icon";

interface BalanceData {
  [key: balanceCoins]: number;
  btc: number;
  usd: number;
  usdc: number;
  usdt: number;
}

interface Label {
  [key: string]: string;
}
const currencyMap: Label = {
  btc: "Bitcoin",
  usdc: "USD Coin",
  usdt: "Tether",
  usd: "Dolar",
};

export type balanceCoins = keyof typeof currencyMap;

export const transformBalance = (data: BalanceData) => {
  const formatted: BalanceCardProps[] = [];

  Object.keys(data).map((key) => {
    if (key == "usdc") return;
    formatted.push({
      currency: currencyMap[key as balanceCoins],
      icon: key as IconNames,
      amount: data[key],
    });
  });

  formatted.sort((a, b) => {
    const order = ["usd", "btc", "usdt"];
    return order.indexOf(a.icon) - order.indexOf(b.icon);
  });
  return formatted;
};
