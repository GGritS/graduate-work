import { Box, Drawer as MuiDrawer } from "@mui/material";
import { NavBar } from "../../nav-bar";
import { FC } from "react";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const Drawer: FC<DrawerProps> = ({ open, onClose }) => {
  return (
    <MuiDrawer
      sx={{ width: "100%" }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box sx={{ width: { sm: "30vw", xs: "50vw" } }}>
        <NavBar />
      </Box>
    </MuiDrawer>
  );
};
