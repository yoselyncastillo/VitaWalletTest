import Dialog from "@mui/material/Dialog";
import { ExchangeSucces } from "../../../assets/exchangeSucces";
import styled from "styled-components";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";
import { Text } from "../../../components/common/";
import { COLORS } from "../../../styles/themes";
import { useEffect, useState } from "react";
import { CoinsStack } from "../../../assets/coinsStack";
import { useNavigate } from "react-router-dom";

export interface SimpleDialogProps {
  message: string;
  currency_received: string;
  open: boolean;
  onClose: (value: boolean) => void;
}

const Content = styled(ContainerFlex)`
  grid-column-start: 1;
  grid-column-end: 6;
`;

export function SimpleDialog(props: SimpleDialogProps) {
  const navigate = useNavigate();

  const { onClose, open, message, currency_received } = props;
  const [description, setDescription] = useState("");
  const handleClose = () => {
    onClose(message === "success" ? true : false);
  };

  useEffect(() => {
    if (message === "success") {
      setDescription(`Ya cuentas con los ${currency_received} en tu saldo.`);
    } else {
      setDescription(message);
    }
  }, [message]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <Content direction="column" padding="80px 80px 74px" align_items="center">
        {message === "success" ? <ExchangeSucces /> : <CoinsStack />}
        <Content direction="column" align_items="center">
          <Text
            fontSize="lg"
            fontWeight="semiBold"
            color="blue_1"
            align_self="center"
            text={
              message === "success" ? "¡Intercambio exitoso!" : "Hubo un error"
            }
          />
          <Text
            fontSize="sm"
            fontWeight="regular"
            color="black"
            align_self="center"
            text={description}
          />
        </Content>
      </Content>
    </Dialog>
  );
}
