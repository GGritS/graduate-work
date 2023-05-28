import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { NavBar } from "./components/nav-bar";
import { AppBarComponent } from "./components/common/app-bar";

type AdminPanelLayoutProps = {
  children: ReactNode;
};

export const AdminPanelLayout: FC<AdminPanelLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBarComponent />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          bgcolor: "red",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: { md: "15%", lg: "10%" },
          }}
        >
          <NavBar />
        </Box>

        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
