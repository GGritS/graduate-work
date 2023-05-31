import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { NavBar } from "./components/nav-bar";
import { AppBarComponent } from "./components/common/app-bar";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

type AdminPanelLayoutProps = {
  children: ReactNode;
};

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    backgroundColor: theme.palette.customBackground.main,
    display: "flex",
    width: "100%",
    flex: 1,
  },
  navBarWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      width: "17%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "13%",
    },
  },
  childrenWrapper: {
    flex: 1,
    padding: "10px",
    overflowX: "auto",
  },
}));

export const AdminPanelLayout: FC<AdminPanelLayoutProps> = ({ children }) => {
  const style = useStyles();

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBarComponent />

      <Box className={style.wrapper}>
        <Box className={style.navBarWrapper}>
          <NavBar />
        </Box>

        <Box className={style.childrenWrapper}>{children}</Box>
      </Box>
    </Box>
  );
};
