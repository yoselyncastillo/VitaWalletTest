import styled from "styled-components";
import { Text } from "../../../components/common";
import { ColorNames } from "../../../styles/themes";

const Row = styled.div`
  grid-column-start: 4;
  grid-column-end: 13;
  display: flex;
  flex-direction: row;
  row-gap: 32px;
  justify-content: space-between;
`;

export interface TableRowProps {
  label: string;
  currency: string;
  amount: string;
  category: Transactions;
}

export type Transactions = "deposit" | "received" | "sent" | "exchange";

const getStatus = (
  category: Transactions
): {
  color: ColorNames;
  symbol: "+" | "-" | "";
} => {
  switch (category) {
    case "deposit": //recargaste
    case "received": //recibiste
      return {
        color: "blue_2",
        symbol: "+",
      };
    case "sent": //transferiste
      return {
        color: "red",
        symbol: "-",
      };
    case "exchange": //intercambiaste
    default:
      return {
        color: "black",
        symbol: "",
      };
  }
};

export const TableRow = ({
  label,
  amount,
  currency,
  category,
}: TableRowProps) => {
  return (
    <Row>
      <Text fontSize="sm" fontWeight="regular" text={label} />
      <Text
        text={`${getStatus(category).symbol} $${amount} ${currency}`}
        fontSize="sm"
        fontWeight="semiBold"
        color={getStatus(category).color}
      />
    </Row>
  );
};
