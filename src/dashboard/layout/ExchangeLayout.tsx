// import { DashboardLayout } from "../layout/DashboardLayout";

import styled from "styled-components";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../context/DashboardContext";

const Container = styled.div`
  grid-column-start: 5;
  grid-column-end: 13;
  padding: 120px 0px;

  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const ExchangeLayout = ({ children }: any) => {
  const { getBalance, getPrices } = useContext(DashboardContext);

  useEffect(() => {
    getBalance();
    getPrices();
  }, []);

  return <Container>{children}</Container>;
};
