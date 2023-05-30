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
import { showTodayOrders } from "./helperFunctions/showTodayOrders";

const OrdersContext = createContext<OrdersContextProviderTypes>(
  {} as OrdersContextProviderTypes
);

export const OrdersContextProvider: FC<OrderContextProviderProps> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [todayOrders, setTodayOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchTodayOrders = async () => {
      const updatedOrders = await showTodayOrders(orders);
      setTodayOrders(updatedOrders);
    };
    fetchTodayOrders();
  }, [orders]);

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

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (doc) => {
      const orders = doc.docs.map((data: any) => data.data()) as Order[];
      const orderedProductsByDate = orders.sort(
        (a, b) => b?.orderTime?.seconds - a?.orderTime?.seconds
      );
      setOrders(orderedProductsByDate);
    });

    return () => {
      unsub();
    };
  }, []);

  const value: OrdersContextProviderTypes = { orders, handleAddOrder };
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

export const useOrdersContext = () => {
  return useContext(OrdersContext);
};
