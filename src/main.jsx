import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Constants/CartContext.jsx"; // Ensure path is correct
import { AuthContextProvider } from "./Constants/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthContextProvider>
  </StrictMode>
);
