import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ReportCard } from "../report-card";
import { useOrdersContext } from "../../../../../context/orders/OrdersContext";
import { useProductsContext } from "../../../../../context/products/ProductsContext";
import { getTheNumberOfOrdersForTheSelectedPeriodOfTime } from "../../../../../context/orders/helperFunctions/getTheNumberOfOrdersForTheSelectedPeriodOfTime";
import { useCalculateDifferenceInDays } from "../../../../../hooks/useCalculateDifferenceInDays";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

export const ReportCards: FC = () => {
  const { orders } = useOrdersContext();
  const { preparedDate } = useProductsContext();
  const [ordersValues, setOrdersValues] = useState({
    totalOrders: 0,
    totalPriceByAllOrders: 0,
  });

  useEffect(() => {
    const { totalOrders, totalPriceByAllOrders } =
      getTheNumberOfOrdersForTheSelectedPeriodOfTime(
        orders,
        preparedDate.start,
        preparedDate.end
      );
    setOrdersValues({ totalOrders, totalPriceByAllOrders });
  }, [preparedDate, orders]);

  const amountOfDays = useCalculateDifferenceInDays(
    preparedDate.start,
    preparedDate.end
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr", sm: "1f" },
        rowGap: "0.5rem",
        columnGap: "1rem",
      }}
    >
      <ReportCard
        title={`Кількість замовлених товарів (шт.) за ${
          amountOfDays === -1 ? "___ " : amountOfDays
        }д.`}
        value={ordersValues.totalOrders}
      >
        <AutoGraphIcon fontSize="medium" />
      </ReportCard>
      <ReportCard
        title={`Отримано коштів (грн.) за ${
          amountOfDays === -1 ? "___ " : amountOfDays
        }д.`}
        value={ordersValues.totalPriceByAllOrders}
      >
        <PriceCheckIcon fontSize="medium" />
      </ReportCard>
    </Box>
  );
};
