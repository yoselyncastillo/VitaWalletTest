import { Text } from "../../../components/common/Text/Text";
import { Button } from "../../../components/common/Button/Button";
import styled from "styled-components";
import { DashboardContext } from "../../../context/DashboardContext";
import { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { COLORS } from "../../../styles/themes";
import { formatAmount, formatExchangeRate } from "../../../utils/formatters";
import { calculateByAmountSent } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";
import { SimpleDialog } from "../InfoModal/InfoModal";
import { exchangeAPI } from "../../../context/DashboardContext/services/DashboardServices";
import { AuthContext } from "../../../context";

const ResumenContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: 100%;
`;
const Content = styled(ContainerFlex)`
  grid-column-start: 1;
  grid-column-end: 6;
`;

const Container = styled.div`
  background: #f9f9f9;
  border-radius: 6px;
  padding: 11px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  grid-column: span 5;
  width: 100%;
  height: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 122px;
  margin-top: auto;
`;
export const Resumen = ({}) => {
  const { currentExchange, prices, postExchange } =
    useContext(DashboardContext);
  const navigate = useNavigate();

  const { headers } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [exchange_rate, setExchange_rate] = useState("");
  const [open, setOpen] = useState(false);
  const [formatted_amount_sent, setFormatted_amount_sent] = useState("");
  const [formatted_amount_received, setFormatted_amount_received] =
    useState("");

  useEffect(() => {
    if (currentExchange && prices) {
      const priceInUse = prices.prices[currentExchange.currency_sent];
      const amount_received = calculateByAmountSent(
        priceInUse,
        currentExchange.amount_sent,
        currentExchange.currency_received
      );
      setFormatted_amount_sent(
        formatAmount(
          currentExchange.amount_sent,
          currentExchange.currency_sent,
          "$"
        )
      );
      setFormatted_amount_received(
        formatAmount(amount_received, currentExchange.currency_received, "")
      );

      setExchange_rate(formatExchangeRate(currentExchange, prices.prices));
    }
  }, [prices, currentExchange]);

  const exchange = () => {
    if (currentExchange && headers) {
      const resp = exchangeAPI(
        headers,
        currentExchange?.currency_sent,
        currentExchange?.currency_received,
        currentExchange?.amount_sent
      );
      resp.then((response) => handleClickOpen(response));
    }
  };

  const handleClickOpen = (response: string) => {
    setMessage(response);
    setOpen(true);
  };

  const handleClose = (isSucces: boolean) => {
    if (isSucces) navigate("/dashboard/inicio", { replace: true });
    setOpen(false);
  };

  return (
    <ResumenContainer>
      {prices && currentExchange ? (
        <Content direction="column" gap="93px">
          <Text
            text="Resumen de transacción"
            fontSize="lg"
            fontWeight="semiBold"
            color="pure_black"
          />
          <Detail>
            <Container>
              <Row>
                <Text
                  fontSize="xs"
                  fontWeight="regular"
                  text="Monto a intercambiar"
                />
                <Text
                  fontSize="sm"
                  fontWeight="semiBold"
                  text={formatted_amount_sent}
                />
              </Row>
              <Row>
                <Text
                  fontSize="xs"
                  fontWeight="regular"
                  text="Tasa de cambio"
                />
                <Text
                  fontSize="sm"
                  fontWeight="semiBold"
                  text={exchange_rate}
                />
              </Row>
              <Row>
                <Text
                  fontSize="xs"
                  fontWeight="regular"
                  text="Total a recibir"
                />
                <Text
                  fontSize="sm"
                  fontWeight="semiBold"
                  color="blue_1"
                  text={formatted_amount_received}
                />
              </Row>
            </Container>
            <ButtonsContainer>
              <Button
                size="base"
                text="Atrás"
                variant="secondary"
                onClick={() =>
                  navigate("/dashboard/intercambiar", { replace: true })
                }
              />
              <Button
                size="base"
                text="Intercambiar"
                variant="primary"
                onClick={exchange}
              />
            </ButtonsContainer>

            <SimpleDialog
              open={open}
              onClose={handleClose}
              message={message}
              currency_received={currentExchange?.currency_received}
            />
          </Detail>
        </Content>
      ) : (
        <>
          <CircularProgress style={{ color: COLORS.blue_1 }} color="inherit" />
        </>
      )}
    </ResumenContainer>
  );
};
