import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/auth/AuthContext.tsx";
import { OrdersContextProvider } from "./context/orders/OrdersContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <AuthContextProvider>
      <OrdersContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </OrdersContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
