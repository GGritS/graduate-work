import { parse, isWithinInterval, startOfDay, endOfDay } from "date-fns";
import { Order } from "..";

export function filterOrdersByTime(
  orders: Order[],
  startDate: string,
  endDate: string
): Order[] {
  const start = startOfDay(parse(startDate, "dd/MM/yyyy", new Date()));
  const end = endOfDay(parse(endDate, "dd/MM/yyyy", new Date()));

  return orders.filter((order) => {
    const orderTimestamp = new Date(order.orderTime.seconds * 1000);

    return isWithinInterval(orderTimestamp, { start, end });
  });
}
