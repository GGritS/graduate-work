import React, { FC } from "react";
import { useStyles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import { ReportCircle } from "../reportCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const ReportCard: FC = () => {
  const style = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: "2rem",
        padding: "1.8rem",
      }}
    >
      <Box>
        <AttachMoneyIcon />
        <Typography>ss</Typography>
        <Typography>ss</Typography>
      </Box>
      <ReportCircle percent={20} />
    </Box>
  );
};
