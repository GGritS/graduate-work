import { Order } from "..";
import { filteredMergedOrdersByDate } from "./mergedOrders";

export function getTheNumberOfOrdersForTheSelectedPeriodOfTime(
  orders: Order[],
  startDate: string | null,
  endDate: string | null
) {
  if (startDate === null || endDate === null) {
    return { totalOrders: 0, totalPriceByAllOrders: 0 };
  } else {
    const filteredOrders = filteredMergedOrdersByDate(
      orders,
      startDate,
      endDate
    );

    let totalOrders = 0;
    let totalPriceByAllOrders = 0;

    filteredOrders.forEach((entry) => {
      entry.orders.forEach((order) => {
        totalOrders += order.quantity;
        totalPriceByAllOrders += order.quantity * order.price;
      });
    });

    return {
      totalOrders,
      totalPriceByAllOrders,
    };
  }
}
