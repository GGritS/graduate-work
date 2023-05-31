import { Order } from "..";
import { filteredMergedOrdersByDate } from "./mergedOrders";

export const getStatisticsBySingleProduct = (
  orders: Order[],
  startDate: string | null,
  endDate: string | null,
  id: number
) => {
  if (startDate === null || endDate === null) {
    return [{ ["дата"]: "/", ["кількість_товару"]: "0", ["сумма"]: 0 }];
  } else {
    const filteredProducts = filteredMergedOrdersByDate(
      orders,
      startDate,
      endDate
    );
    const productStatistic: {
      ["дата"]: string;
      ["кількість_товару"]: number;
      ["сумма"]: number;
    }[] = [];

    filteredProducts.forEach((product) => {
      const existingProduct = product.orders.find((order) => order.id === id);
      if (existingProduct) {
        const { date } = product;
        const { quantity, price } = existingProduct;
        const totalAmount = quantity * price;
        productStatistic.push({
          ["дата"]: date,
          ["кількість_товару"]: quantity,
          ["сумма"]: totalAmount,
        });
      }
    });

    return productStatistic;
  }
};
