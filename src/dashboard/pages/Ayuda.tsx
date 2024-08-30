import { styled } from "styled-components";
import { ContainerFlex } from "../../styles/globalStyledcomponents";
import { ExchangeSucces } from "../../assets/exchangeSucces";
import { Text } from "../../components/common";

const Content = styled(ContainerFlex)`
  grid-column-start: 4;
  grid-column-end: 13;
  width: 100%;
`;

export const Ayuda = () => {
  return (
    <Content direction="column" align_items="center" justify_content="center">
      <ExchangeSucces />
      <Text
        fontSize="lg"
        fontWeight="semiBold"
        color="blue_1"
        align_self="center"
        text="¡En Construccion!"
      />
    </Content>
  );
};
