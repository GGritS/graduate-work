import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/auth/AuthContext.tsx";
import { OrdersContextProvider } from "./context/orders/OrdersContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { ProductsContextProvider } from "./context/products/ProductsContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <AuthContextProvider>
      <OrdersContextProvider>
        <ProductsContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ProductsContextProvider>
      </OrdersContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
