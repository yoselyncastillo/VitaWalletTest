import styled from "styled-components";
import { Text } from "../../components/common";
import { FormIntercambiar } from "../components/FormIntercambiar.tsx/FormIntercambiar";
import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { formatAmount } from "../../utils/formatters";

const Container = styled.div`
  grid-column-start: 5;
  grid-column-end: 13;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  height: 100%;
`;

export const Exchange = () => {
  const { balance, prices } = useContext(DashboardContext);
  return (
    <Container>
      <Text
        fontSize="lg"
        fontWeight="semiBold"
        text="¿Qué deseas intercambiar?"
      />
      <Text
        fontSize="sm"
        fontWeight="semiBold"
        color="blue_2"
        text={`Saldo disponible: ${formatAmount(parseFloat(balance["usd"]), "usd", "$")}`}
      />

      {prices && balance && <FormIntercambiar prices={prices.prices} />}
    </Container>
  );
};
