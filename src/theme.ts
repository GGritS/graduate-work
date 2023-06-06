import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customBackground: Palette["primary"];
    customCardColor: Palette["primary"];
  }
  interface PaletteOptions {
    customBackground?: PaletteOptions["primary"];
    customCardColor?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#070707",
    },
    secondary: {
      main: "#7380ec",
    },
    customBackground: {
      main: "#f6f6f9",
      dark: "#363949",
    },
    customCardColor: {
      main: "#ffffff",
      dark: "#202528",
    },
  },
});

export default theme;
