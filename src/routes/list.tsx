import { AdminPanel } from "../pages/admin-panel-page";
import { OrderPage } from "../pages/order-page";
import { Route } from "./types";

export const PUBLIC_ROUTES: Route[] = [
  {
    path: "/",
    component: <OrderPage />,
  },
  {
    path: "/adminPanel",
    component: <AdminPanel />,
  },
];

export const PRIVATE_ROUTES: Route[] = [];
