import styled from "styled-components";
import { BalanceCardProps } from "../../../interfaces/BalanceCard";
import { BalanceCard } from "../BalanceCard/BalanceCard";
import { Text } from "../../../components/common";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 20px;
  row-gap: 24px;
`;

const TextContainer = styled.div`
  grid-column: span 9;
`;

export interface BalanceCardsProps {
  data: BalanceCardProps[];
}

export const BalanceCards = ({ data }: BalanceCardsProps) => {
  return (
    <CardsContainer>
      <TextContainer>
        <Text fontSize="md" fontWeight="regular" text="Mis saldos" />
      </TextContainer>
      {data.map((balance, index) => (
        <BalanceCard
          key={index}
          currency={balance.currency}
          icon={balance.icon}
          amount={balance.amount}
        />
      ))}
    </CardsContainer>
  );
};
