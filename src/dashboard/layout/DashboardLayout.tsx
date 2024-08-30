import { Sidebar } from "../../components/common/Sidebar/Sidebar";
import styled from "styled-components";
import { DashboardProvider } from "../../context/DashboardContext";

const RouterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 0 120px;

  flex: 1;
  width: 100%;
`;

export const DashboardLayout = ({ children }: any) => {
  const menuItems = [
    {
      path: "/dashboard/inicio",
      title: "Inicio",
    },
    {
      path: "/dashboard/transferir",
      title: "Transferir",
    },
    {
      path: "/dashboard/recargar",
      title: "Recargar",
    },
    {
      path: "/dashboard/intercambiar",
      title: "Intercambiar",
    },
    {
      path: "/dashboard/perfil",
      title: "Perfil",
    },
    {
      path: "/dashboard/ayuda",
      title: "Ayuda",
    },
  ];
  return (
    <DashboardProvider>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Sidebar menuItems={menuItems} />
        <RouterContainer style={{}}>{children}</RouterContainer>
      </div>
    </DashboardProvider>
  );
};
