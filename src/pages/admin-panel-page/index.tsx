import { Box } from "@mui/material";
import React, { FC } from "react";
import { NavBar } from "./components/nav-bar";
import { AppBarComponent } from "./components/common/app-bar";

export const AdminPanel: FC = () => {
  return (
    <Box>
      <AppBarComponent />
      <Box
        sx={{ display: "flex", width: "100%", bgcolor: "red", height: "100vh" }}
      >
        <NavBar />
        <Box sx={{}}>s</Box>
      </Box>
    </Box>
  );
};
