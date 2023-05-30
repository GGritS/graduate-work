import { AdminPanelLayout } from "../pages/admin-panel-page";
import { DataGridOuter } from "../pages/admin-panel-page/components/data-grid";
import { Reports } from "../pages/admin-panel-page/components/repots";
import { Home } from "../pages/admin-panel-page/components/home";
import { OrderPage } from "../pages/order-page";
import { Route } from "./types";
import { Login } from "../pages/login";
import { AddProduct } from "../pages/admin-panel-page/components/addProduct";
import { Products } from "../pages/admin-panel-page/components/products";

export const PUBLIC_ROUTES: Route[] = [
  {
    path: "/",
    component: <OrderPage />,
  },
  {
    path: "/login",
    component: <Login />,
  },
];

export const PRIVATE_ROUTES: Route[] = [
  // {
  //   path: "/",

  //   component: (
  //     <AdminPanelLayout>
  //       <Home />
  //     </AdminPanelLayout>
  //   ),
  // },
  {
    path: "/table",

    component: (
      <AdminPanelLayout>
        <DataGridOuter />
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
  {
    path: "/addProduct",

    component: (
      <AdminPanelLayout>
        <AddProduct />
      </AdminPanelLayout>
    ),
  },
  {
    path: "/",

    component: (
      <AdminPanelLayout>
        <Products />
      </AdminPanelLayout>
    ),
  },
];
