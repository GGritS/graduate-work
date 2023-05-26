import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/auth/AuthContext.tsx";
import { OrdersContextProvider } from "./context/orders/OrdersContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthContextProvider>
    <OrdersContextProvider>
      <App />
    </OrdersContextProvider>
  </AuthContextProvider>
);
