import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Constants/CartContext.jsx"; // Make sure this path is correct

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {" "}
      {/* Wrap your app in the CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>
);
