import { AdminPanelLayout } from "../pages/admin-panel-page";
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
    path: "/dataGrid",

    component: <AdminPanelLayout>dataGrid</AdminPanelLayout>,
  },
  {
    path: "/table",

    component: <AdminPanelLayout>table</AdminPanelLayout>,
  },
  {
    path: "/",

    component: <AdminPanelLayout>home</AdminPanelLayout>,
  },
  {
    path: "/reports",

    component: <AdminPanelLayout>Reports</AdminPanelLayout>,
  },
];
