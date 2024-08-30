import styled from "styled-components";
import { Text } from "../../../components/common";
import { TableRow, Transactions } from "./TableRow";
import { COLORS } from "../../../styles/themes";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";

const Table = styled(ContainerFlex)``;
const Row = styled(ContainerFlex)``;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.gray_2};
`;

export interface TableRowProps {
  label: string;
  currency: string;
  amount: string;
  category: Transactions;
}
export interface HistoryProps {
  transactions: TableRowProps[];
}
export const History = ({ transactions }: HistoryProps) => {
  return (
    <ContainerFlex
      direction="column"
      gap="32px"
      grid_column_start={4}
      grid_column_end={13}
    >
      <Text text="Historial" fontSize="md" fontWeight="regular" />
      <Table direction="column" gap="20px">
        {transactions.map((row: TableRowProps, index: number) => (
          <Row direction="column" gap="20px" key={index}>
            <TableRow
              key={index}
              label={row.label}
              amount={row.amount}
              currency={row.currency}
              category={row.category}
            />
            <Divider />
          </Row>
        ))}
      </Table>
    </ContainerFlex>
  );
};
