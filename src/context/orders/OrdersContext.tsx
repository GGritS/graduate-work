import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  Order,
  OrderContextProviderProps,
  OrdersContextProviderTypes,
} from ".";
import { db } from "../../firebase";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { generateRandomId } from "./helperFunctions/generateRandomId";

const OrdersContext = createContext<OrdersContextProviderTypes>(
  {} as OrdersContextProviderTypes
);

export const OrdersContextProvider: FC<OrderContextProviderProps> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const handleAddOrder = async (order: Omit<Order, "orderTime">) => {
    const currentTime = await Timestamp.now();

    try {
      await setDoc(doc(db, "orders", generateRandomId()), {
        ...order,
        orderTime: currentTime,
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const fetchOrders = () => {
    const unsub = onSnapshot(collection(db, "orders"), (doc) => {
      // eslint-disable-next-line
      const orders = doc.docs.map((data: any) => data.data()) as Order[];
      const orderedProductsByDate = orders.sort(
        (a, b) => b?.orderTime?.seconds - a?.orderTime?.seconds
      );
      setOrders(orderedProductsByDate);
      return () => {
        unsub();
      };
    });
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const value: OrdersContextProviderTypes = {
    orders,
    handleAddOrder,
  };
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

// eslint-disable-next-line
export const useOrdersContext = () => {
  return useContext(OrdersContext);
};
