import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

//interface to add custom palette color- PaletteOptions

const theme = createTheme({
  palette: {
    primary: {
      main: "#070707",
    },
    customBackground: {
      main: "#f6f6f9",
      dark: "#363949",
    },
    customCardColor: {
      main: "#fff",
      dark: "#202528",
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
