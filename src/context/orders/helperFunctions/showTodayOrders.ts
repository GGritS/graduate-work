import { Timestamp } from "firebase/firestore";
import { addDays, format } from "date-fns";
import { filterOrdersByTime } from "./filterOrdersByTime";
import { Order } from "..";

export async function getTodayAndTomorrowDates(): Promise<{
  todayDate: string;
  tomorrowDate: string;
}> {
  const currentTime = await Timestamp.now();

  const today = new Date(currentTime.seconds * 1000);
  const tomorrow = addDays(today, 1);

  const todayDate = format(today, "dd/MM/yyyy");
  const tomorrowDate = format(tomorrow, "dd/MM/yyyy");

  return { todayDate, tomorrowDate };
}

export const showTodayOrders = async (orders: Order[]) => {
  const { todayDate, tomorrowDate } = await getTodayAndTomorrowDates();
  const todayOrders = filterOrdersByTime(orders, todayDate, tomorrowDate);
  return todayOrders;
};
