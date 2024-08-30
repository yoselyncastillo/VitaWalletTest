import styled from "styled-components";
import { BalanceCards, History, UsernameHeader } from "../components";
import { transformBalance, transformHistory } from "../helpers";
import { AuthContext } from "../../context";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import { ContainerFlex } from "../../styles/globalStyledcomponents";

const InicioContainer = styled(ContainerFlex)`
  > *:nth-child(2) {
    margin-top: 20px;
  }
`;

export const Balance = () => {
  const { userdata } = useContext(AuthContext);
  const { getBalance, getHistory, balance, history } =
    useContext(DashboardContext);

  useEffect(() => {
    getBalance();
    getHistory();
  }, []);

  return (
    <InicioContainer
      direction="column"
      gap="56px"
      grid_column_start={4}
      grid_column_end={13}
      padding="76px 0px 0px"
    >
      {userdata && (
        <UsernameHeader username={userdata?.first_name} icon={"coin"} />
      )}
      {balance && <BalanceCards data={transformBalance(balance)} />}
      {history && <History transactions={transformHistory(history)} />}
    </InicioContainer>
  );
};
