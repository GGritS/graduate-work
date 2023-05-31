import { FC, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useProductsContext } from "../../../../../context/products/ProductsContext";
import { MyBarChart } from "../my-bar-chart";

export const SalesProductAccordionStatistic: FC = () => {
  const { products, dateState } = useProductsContext();
  const [isWrongDate, setIsWrongDate] = useState<boolean>(false);

  useEffect(() => {
    if (dateState.start && dateState.end) {
      setIsWrongDate(true);
    } else {
      setIsWrongDate(false);
    }
  }, [dateState]);

  return (
    <Accordion sx={{ marginTop: "20px" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Замовлення кожного продукту:</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!isWrongDate ? (
          <>Дату вибрано не правильно!</>
        ) : (
          products.map((product, index) => (
            <Box mt={3} key={index}>
              <MyBarChart product={product} />
            </Box>
          ))
        )}
      </AccordionDetails>
    </Accordion>
  );
};
