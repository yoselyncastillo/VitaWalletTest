import styled from "styled-components";
import { Text, Icon } from "../../../components/common";
import { IconNames } from "../../../interfaces/Icon";

const Header = styled.div`
  /* grid-column: span 3; */
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  /* justify-content: space-between; */
  height: fit-content;
  box-sizing: border-box;
`;

interface Props {
  username: string;
  icon: IconNames;
}

export const UsernameHeader = ({ username, icon }: Props) => {
  return (
    <Header>
      <Icon name={icon} />
      <div>
        <Text
          fontSize="lg"
          fontWeight="semiBold"
          color="pure_black"
          text={"¡Hola "}
        />
        <Text
          fontSize="lg"
          fontWeight="semiBold"
          color="blue_gradient"
          text={`${username}!`}
        />
      </div>
    </Header>
  );
};
