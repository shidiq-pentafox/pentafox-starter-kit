import { Outlet, Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { Dashboard, Login } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default NavigationRoutes;