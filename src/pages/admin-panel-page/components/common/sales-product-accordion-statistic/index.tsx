import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useProductsContext } from "../../../../../context/products/ProductsContext";
import { MyBarChart } from "../my-bar-chart";

type SalesProductAccordionStatisticProps = {
  productId: string;
};

export const SalesProductAccordionStatistic: FC<
  SalesProductAccordionStatisticProps
> = ({ productId }) => {
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
    <>
      {!isWrongDate || productId === "" || products.length === 0 ? (
        <Box mt={1}>Не правильна дата чи не вибраний продукт</Box>
      ) : (
        <Box mt={3}>
          <MyBarChart productId={productId} />
        </Box>
      )}
    </>

    // <Accordion sx={{ marginTop: "20px" }}>
    //   <AccordionSummary
    //     expandIcon={<ExpandMoreIcon />}
    //     aria-controls="panel1a-content"
    //     id="panel1a-header"
    //   >
    //     <Typography>Замовлення кожного продукту:</Typography>
    //   </AccordionSummary>
    //   <AccordionDetails>
    //     {!isWrongDate ? (
    //       <>Дату вибрано не правильно!</>
    //     ) : (
    //       products.map((product, index) => (
    //         <Box mt={3} key={index}>
    //           <MyBarChart product={product} />
    //         </Box>
    //       ))
    //     )}
    //   </AccordionDetails>
    // </Accordion>
  );
};
