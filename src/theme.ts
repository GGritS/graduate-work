import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: "#070707",
    },
  },
  // typography: {
  //   h2: {
  //
  //     color: "#000000",
  //     [breakpoints.up("md")]: {
  //       fontSize: "64px",
  //       lineHeight: "78px",
  //     },
  //   },
  // },
});

export default theme;
