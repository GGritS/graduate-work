import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

import { ReportsBar } from "../common/reportsBar";
import { SalesProductAccordionStatistic } from "../common/sales-product-accordion-statistic";
import { ReportCards } from "../common/report-cards";
import { useProductsContext } from "../../../../context/products/ProductsContext";

export const Reports: FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>("");

  const { products } = useProductsContext();

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedProductId(event.target.value as string);
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ReportsBar />
      <ReportCards />

      <Typography sx={{ mt: "20px" }}>
        Вибрати продукт для перегляду статистики:
      </Typography>
      <FormControl fullWidth sx={{ mt: "10px" }}>
        <InputLabel id="demo-simple-select-label">Назва продукту</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedProductId}
          label="Назва продукту"
          onChange={handleChange}
        >
          {products.map((product) => (
            <MenuItem key={product.fid} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SalesProductAccordionStatistic productId={selectedProductId} />
    </Box>
  );
};
