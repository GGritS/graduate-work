import { Box, Typography } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getStatisticsBySingleProduct } from "../../../../../context/orders/helperFunctions/getStatisticsBySingleProduct";
import { useOrdersContext } from "../../../../../context/orders/OrdersContext";
import { useProductsContext } from "../../../../../context/products/ProductsContext";
import { Product } from "../../../../../context/products";

type MyBarChartProps = {
  product: Product;
};

export const MyBarChart: FC<MyBarChartProps> = ({ product }) => {
  const { name, id } = product;
  const divRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line
  const [data, setData] = useState<any>();
  const { orders } = useOrdersContext();
  const { preparedDate } = useProductsContext();

  useEffect(() => {
    const newData = getStatisticsBySingleProduct(
      orders,
      preparedDate.start,
      preparedDate.end,
      id
    );
    setData(newData);
    // eslint-disable-next-line
  }, [product, preparedDate, orders]);
  const [currentWidth, setCurrentWidth] = useState<number>(200);

  useEffect(() => {
    const getWidth =
      divRef.current === null
        ? currentWidth
        : divRef.current.getBoundingClientRect().width;
    setCurrentWidth(getWidth);
  }, [currentWidth]);
  return (
    <Box>
      <Typography sx={{ display: "flex" }}>
        <Box fontSize="18px" fontWeight={800}>
          {name}
        </Box>
      </Typography>
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
