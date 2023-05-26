import { createContext, FC, useContext, useState } from "react";
import {
  Order,
  OrderContextProviderProps,
  OrdersContextProviderTypes,
} from ".";

// import { doc, setDoc } from "firebase/firestore";

const OrdersContext = createContext<OrdersContextProviderTypes>(
  {} as OrdersContextProviderTypes
);

export const OrdersContextProvider: FC<OrderContextProviderProps> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const res = await [];
    setOrders(res);
  };

  const value: OrdersContextProviderTypes = { orders };
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrdersContext);
};
