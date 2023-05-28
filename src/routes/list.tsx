import { AdminPanelLayout } from "../pages/admin-panel-page";
import { DataGrid } from "../pages/admin-panel-page/components/data-grid";
import { Reports } from "../pages/admin-panel-page/components/repots";
import { Home } from "../pages/admin-panel-page/components/home";
import { OrderPage } from "../pages/order-page";
import { Route } from "./types";

export const PUBLIC_ROUTES: Route[] = [
  {
    path: "/",
    component: <OrderPage />,
  },
];

export const PRIVATE_ROUTES: Route[] = [
  {
    path: "/table",

    component: (
      <AdminPanelLayout>
        <DataGrid />
      </AdminPanelLayout>
    ),
  },
  {
    path: "/",

    component: (
      <AdminPanelLayout>
        <Home />
      </AdminPanelLayout>
    ),
  },
  {
    path: "/reports",

    component: (
      <AdminPanelLayout>
        <Reports />
      </AdminPanelLayout>
    ),
  },
];
