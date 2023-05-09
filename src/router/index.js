import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import TablePage from "../pages/TablePage";
import CustomNavbar from "../components/CustomNavbar";
import ChartPage from "../pages/ChartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <CustomNavbar />
      <Outlet />
    </div>,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/table",
        element: <TablePage />
      },
      {
        path: "/chart",
        element: <ChartPage />
      },
    ]
  },
]);

export default router;