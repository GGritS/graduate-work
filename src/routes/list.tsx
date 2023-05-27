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
    component: <div>dataGrid</div>,
  },
];
