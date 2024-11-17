import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
import ProductDetails from "./Components/ProductDetails";
import ErrorPage from "./Components/ErrorPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/products/:id-:slug" element={<ProductDetails />} />
          {/* Dynamic route */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="*"
            element={
              <ErrorPage
                message="The page you are looking for doesn't exist."
                redirectPath="/"
                redirectLabel="Go Home"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
