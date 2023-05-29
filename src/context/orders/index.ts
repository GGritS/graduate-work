import { ReactNode } from "react";
import { ProductCardValue } from "../../types";
import { Timestamp } from "firebase/firestore";

export type OrdersContextProviderTypes = {
  orders: Order[];
  handleAddOrder: (order: Order) => void;
};

export type OrderContextProviderProps = {
  children: ReactNode;
};

export type Order = {
  customerName: string;
  customerAddress: string;
  customerPhoneNumber: string;
  customerOrders: CustomerOrder[];
  totalPrice: number;
  orderTime: Timestamp;
};

export type CustomerOrder = Omit<ProductCardValue, "description" | "photo">;
