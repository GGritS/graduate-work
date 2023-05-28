import { createContext, FC, useContext, useState } from "react";
import {
  Order,
  OrderContextProviderProps,
  OrdersContextProviderTypes,
} from ".";
import { db } from "../../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

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
  function generateRandomId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 8;
    let randomId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  }

  const handleAddOrder = async (order: Order) => {
    const currentTime = await Timestamp.now();
    console.log("order", {
      ...order,
      orderTime: currentTime,
    });

    try {
      await setDoc(doc(db, "orders", generateRandomId()), {
        ...order,
        orderTime: currentTime,
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const value: OrdersContextProviderTypes = { orders, handleAddOrder };
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

export const useOrdersContext = () => {
  return useContext(OrdersContext);
};
