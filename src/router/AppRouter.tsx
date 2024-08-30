import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Navigate to="/dashboard/inicio" />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
