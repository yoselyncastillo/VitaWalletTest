import { Routes, Route, Navigate } from "react-router-dom";
import { Exchange } from "../pages";
import { Resumen } from "../components/Resumen/Resumen";
import { ExchangeLayout } from "../layout/ExchangeLayout";

export const ExchangeRoutes = () => {
  return (
    <ExchangeLayout>
      <Routes>
        <Route index element={<Exchange />} />
        <Route path="/resume" element={<Resumen />} />

        <Route path="/*" element={<Navigate to="/dashboard/inicio" />} />
      </Routes>
    </ExchangeLayout>
  );
};
