import styled from "styled-components";
import { BalanceCardProps } from "../../../interfaces/BalanceCard";
import { Icon, Text } from "../../../components/common";
import { COLORS } from "../../../styles/themes";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";

const CardHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled(ContainerFlex)`
  grid-column: span 3;
  justify-content: space-between;
  background: ${COLORS.gray_3};
  border: 2px solid ${COLORS.gray_2};
  border-radius: 6px;
`;

export const BalanceCard = ({ currency, amount, icon }: BalanceCardProps) => {
  return (
    <Card direction="column" gap="24px" padding="24px" >
      <CardHeader>
        <Text fontSize="sm" fontWeight="regular" text={currency} />
        <Icon name={icon} />
      </CardHeader>
      <Text fontSize="md" fontWeight="semiBold" text={amount} />
    </Card>
  );
};
