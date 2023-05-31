import { Box } from "@mui/material";
import { FC } from "react";

import { ReportsBar } from "../common/reportsBar";
import { SalesProductAccordionStatistic } from "../common/sales-product-accordion-statistic";
import { ReportCards } from "../common/report-cards";

export const Reports: FC = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ReportsBar />
      <ReportCards />
      <SalesProductAccordionStatistic />
    </Box>
  );
};
