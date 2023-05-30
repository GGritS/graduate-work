import { Box, Grid } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { useCalculateDifferenceInDays } from "../../../../hooks/useCalculateDifferenceInDays";
import { ReportCard } from "../common/reportCard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useOrdersContext } from "../../../../context/orders/OrdersContext";
import { getStatisticsBySingleProduct } from "../../../../context/orders/helperFunctions/getStatisticsBySingleProduct";

export const Reports: FC = () => {
  console.log(useCalculateDifferenceInDays("01/03/2023", "10/10/2024"));
  const divRef = useRef<HTMLDivElement>(null);
  const [currentWidth, setCurrentWidth] = useState<number>(200);
  const { orders } = useOrdersContext();

  useEffect(() => {
    const getWidth =
      divRef.current === null
        ? currentWidth
        : divRef.current.getBoundingClientRect().width;
    setCurrentWidth(getWidth);
  }, []);

  const data = getStatisticsBySingleProduct(
    orders,
    "29/05/2023",
    "31/05/2023",
    2
  );
  console.log(data);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      2
      <Box
        sx={{
          width: "100%",
          background: "blue",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "1f" },
          rowGap: "0.5rem",
          columnGap: "1rem",
        }}
      >
        <ReportCard />
        <ReportCard />
        <ReportCard />
      </Box>
      <div ref={divRef}>
        <BarChart width={currentWidth} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="дата" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="кількість_товару" fill="#8884d8" />
          <Bar dataKey="сумма" fill="#82ca9d" />
        </BarChart>
      </div>
    </Box>
  );
};
