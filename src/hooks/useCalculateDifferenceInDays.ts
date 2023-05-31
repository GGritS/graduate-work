export function useCalculateDifferenceInDays(
  startDate: string | null,
  endDate: string | null
): number {
  if (startDate !== null && endDate !== null) {
    const [day1, month1, year1] = startDate.split("/");
    const [day2, month2, year2] = endDate.split("/");

    const firstDate = new Date(Number(year1), Number(month1) - 1, Number(day1));
    const secondDate = new Date(
      Number(year2),
      Number(month2) - 1,
      Number(day2)
    );

    if (secondDate < firstDate) {
      return -1;
    }

    const timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
    const differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return differenceInDays;
  } else {
    return -1;
  }
}
