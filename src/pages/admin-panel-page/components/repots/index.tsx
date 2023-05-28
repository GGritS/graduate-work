import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { useCalculateDifferenceInDays } from "../../../../hooks/useCalculateDifferenceInDays";
import { ReportCard } from "../common/reportCard";

export const Reports: FC = () => {
  console.log(useCalculateDifferenceInDays("01/03/2023", "10/10/2024"));
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
    </Box>
  );
};
