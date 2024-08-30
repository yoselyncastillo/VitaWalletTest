import { Routes, Route, Navigate } from "react-router-dom";
import {
  Ayuda,
  Balance,
} from "../pages";
import { DashboardLayout } from "../layout/DashboardLayout";
import { ExchangeRoutes } from "./ExchangeRoutes";

export const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/inicio" element={<Balance />} />
        <Route path="/transferir" element={<Ayuda />} />
        <Route path="/recargar" element={<Ayuda />} />
        <Route path="/intercambiar/*" element={<ExchangeRoutes />} />
        <Route path="/perfil" element={<Ayuda />} />
        <Route path="/ayuda" element={<Ayuda />} />

        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
    </DashboardLayout>
  );
};
