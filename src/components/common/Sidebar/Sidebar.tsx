import { SidebarProps } from "../../../interfaces";
import styled from "styled-components";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 372px;
  height: 100%;
  padding: 132px 0 80px;
  position: fixed;
  box-sizing: border-box;
  justify-content: space-between;

  background: #167287;

  img {
    position: absolute;
    bottom: 0;
    top: 0;
    z-index: -1;
  }
`;
const ContainerMenu = styled(ContainerFlex)`
  width: 100%;
`;

export const Sidebar = ({ menuItems }: SidebarProps) => {
  const { logout } = useContext(AuthContext);
  const onLogout = () => {
    logout();
  };

  return (
    <StyledSidebar>
      <ContainerMenu direction="column" gap="8px">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.path}
            path={item.path}
            title={item.title}
          />
        ))}
      </ContainerMenu>

      <SidebarMenuItem
        path={"auth/login"}
        title={"Cerrar Sesion"}
        onClick={onLogout}
      />
      <img src="../src/assets/fondo.svg" alt="" />
    </StyledSidebar>
  );
};
