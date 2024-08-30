import { useEffect, useState, useContext } from "react";
import {
  Button,
  CustomSelect,
  InputField,
  Text,
} from "../../../components/common/";
import styled from "styled-components";
import { IconNames } from "../../../interfaces/Icon";
import { useExchange } from "../../hooks/useExchange";
import { DashboardContext } from "../../../context/DashboardContext";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";
import { useNavigate } from "react-router-dom";
import {
  calculateByAmountReceived,
  calculateByAmountSent,
} from "../../../utils/utils";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
`;
const InputContainer = styled.div`
  grid-column: span 4;
`;
const InputFormContainer = styled(ContainerFlex)``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  gap: 48px;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-start: 5;
  grid-column-end: 9;
  margin-top: auto;
  gap: 20px;
`;

interface Props {
  prices: {
    [key: string]: {
      [key: string]: number;
    };
  };
}

export const FormIntercambiar = ({ prices }: Props) => {
  const selectOptions: IconNames[] = ["btc", "usdc", "usdt", "usd"];
  const navigate = useNavigate();
  const { setCurrentExchange } = useContext(DashboardContext);
  const [focusedInput, setFocusedInput] = useState("null");
  const [priceInUse, setPriceInUse] = useState<{ [key: string]: number }>(
    prices[0]
  );

  const {
    control,
    setValue,
    currency_sent,
    currency_received,
    amount_sent,
    amount_received,
    formValues,
  } = useExchange(prices);

  useEffect(() => {
    setPriceInUse(prices[0]);
  }, []);

  useEffect(() => {
    setPriceInUse(prices[currency_sent]);
  }, [prices, currency_sent]);

  useEffect(() => {
    setValue("amount_sent", "0");
  }, [currency_sent]);

  useEffect(() => {
    setValue("amount_received", "0");
  }, [currency_received]);

  useEffect(() => {
    if (priceInUse && amount_sent && focusedInput === "amount_sent") {
      const recibir = calculateByAmountSent(
        priceInUse,
        amount_sent,
        currency_received
      );
      setValue("amount_received", recibir.toString());
    }
  }, [amount_sent, priceInUse]);

  useEffect(() => {
    if (priceInUse && amount_sent) {
      const intercambiar = calculateByAmountReceived(
        priceInUse,
        amount_received,
        currency_received
      );
      setValue("amount_sent", intercambiar.toString());
    }
  }, [amount_received, priceInUse]);

  const setStore = () => {
    setCurrentExchange(formValues, prices);
    navigate("/dashboard/intercambiar/resume", { replace: true });
  };
  return (
    <>
      <Form>
        <InputFormContainer direction="column" gap="48px">
          <ContainerFlex direction="column" gap="16px">
            <Text
              fontSize="sm"
              fontWeight="regular"
              text="Monto a intercambiar"
            />
            <GridContainer>
              <CustomSelect
                control={control}
                name="currency_sent"
                options={selectOptions.filter(
                  (cripto) => cripto !== currency_received
                )}
              />
              <InputContainer>
                <InputField
                  setFocusedInput={setFocusedInput}
                  control={control}
                  name="amount_sent"
                  type="text"
                  placeholder="Monto en CLP"
                />
              </InputContainer>
            </GridContainer>
          </ContainerFlex>
          <ContainerFlex direction="column" gap="16px">
            <Text fontSize="sm" fontWeight="regular" text="Quiero recibir" />
            <GridContainer>
              <CustomSelect
                control={control}
                name="currency_received"
                options={selectOptions.filter(
                  (cripto) => cripto !== currency_sent
                )}
              />
              <InputContainer>
                <InputField
                  setFocusedInput={setFocusedInput}
                  control={control}
                  name="amount_received"
                  type="text"
                  placeholder="Monto en CLP"
                />
              </InputContainer>
            </GridContainer>
          </ContainerFlex>
        </InputFormContainer>

        <ButtonContainer>
          <Button text="Atrás" variant="secondary" size="full" />
          <Button
            text="Continuar"
            variant="primary"
            size="full"
            disabled={
              (formValues.amount_received === "0" ||
                formValues.amount_received === "") &&
              (formValues.amount_sent === "0" || formValues.amount_sent === "")
            }
            onClick={setStore}
          />
        </ButtonContainer>
      </Form>
    </>
  );
};
