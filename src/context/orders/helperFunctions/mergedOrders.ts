import { CustomerOrder, Order } from "..";
import { format } from "date-fns";
import { filterOrdersByTime } from "./filterOrdersByTime";

export function mergedOrdersByDate(
  orders: Order[],
  startDate: string,
  endDate: string
) {
  const filteredOrders = filterOrdersByTime(orders, startDate, endDate);
  const mergedOrders: { date: string; orders: CustomerOrder[] }[] = [];

  filteredOrders.forEach((order) => {
    const orderDate = format(order.orderTime.toDate(), "dd/MM/yyyy");
    const existingEntry = mergedOrders.find(
      (entry) => entry.date === orderDate
    );

    if (existingEntry) {
      existingEntry.orders.push(...order.customerOrders);
    } else {
      mergedOrders.push({ date: orderDate, orders: [...order.customerOrders] });
    }
  });

  return mergedOrders;
}

export const filteredMergedOrdersByDate = (
  orders: Order[],
  startDate: string,
  endDate: string
) => {
  const mergedOrders = mergedOrdersByDate(orders, startDate, endDate);

  const filteredMergedOrders = mergedOrders.map((entry) => {
    const updatedOrders: CustomerOrder[] = [];
    const orderMap: Map<number, CustomerOrder> = new Map();

    entry.orders.forEach((order) => {
      const existingOrder = orderMap.get(order.id);

      if (existingOrder) {
        existingOrder.quantity += order.quantity;
      } else {
        orderMap.set(order.id, { ...order });
      }
    });

    orderMap.forEach((order) => {
      updatedOrders.push(order);
    });

    return { date: entry.date, orders: updatedOrders };
  });

  return filteredMergedOrders;
};
