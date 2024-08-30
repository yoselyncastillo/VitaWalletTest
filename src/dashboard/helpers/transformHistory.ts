import { TableRowProps } from "../components";

interface Label {
  [key: string]: string;
}

const label: Label = {
  deposit: "Recargaste",
  received: "Recibiste",
  sent: "Transferiste",
  exchange: "Intercambiaste",
};

export const transformHistory = (data: any) => {
  const formatted: TableRowProps[] = [];

  data.map((transaction:any) => {
    const attr = transaction.attributes;

    const formattedTransaction = {
      label: label[attr.category],
      amount: attr.category === 'sent' ? attr.total : attr.amount,
      currency: attr.currency,
      category: attr.category,
    };

    formatted.push(formattedTransaction);
  });

  return formatted;
};
