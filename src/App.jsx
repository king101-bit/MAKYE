import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./Components/Hero";
import FeaturedProduct from "./Components/FeaturedProduct";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Contact />
    </>
  );
};

export default App;
