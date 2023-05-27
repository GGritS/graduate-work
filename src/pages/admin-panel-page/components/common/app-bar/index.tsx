import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "../drawer";
import { useState } from "react";

export const AppBarComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box>
      <AppBar position="static">
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Панель керування
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
