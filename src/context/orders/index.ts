import { ReactNode } from "react";

export type OrdersContextProviderTypes = {
  orders: Order[];
};

export type OrderContextProviderProps = {
  children: ReactNode;
};

export type Order = {
  test?: true;
};
