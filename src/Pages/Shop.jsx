import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ShopNavbar from "../Components/ShopNavbar";
import Filters from "../Components/Filters";
import ProductCard from "../Components/ProductCard";
import "../assets/shop.css";

const Shop = () => {
  // State for all products and filtered products
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch product data (replace with actual API call if needed)
  useEffect(() => {
    const fetchProducts = async () => {
      const mockProducts = [
        {
          id: "1",
          name: "Shibuya Totepack",
          details: "Recycled PET Body",
          price: 18000.0,
          image:
            "https://i.pinimg.com/736x/9c/79/b6/9c79b6230cf24eabcaa57e7c47c19f46.jpg",
          slug: "shibuya-totepack",
        },
        {
          id: "2",
          name: "SoFo Backpack City",
          details: "Recycled Cotton Canvas",
          price: 250.0,
          image:
            "https://i.pinimg.com/736x/5f/d7/01/5fd7010a27121b4500cc794eab4095fa.jpg",
          slug: "sofo-backpack-city",
        },
        {
          id: "3",
          name: "Eco Tote Bag",
          details: "Sustainable Design",
          price: 100.0,
          image:
            "https://i.pinimg.com/736x/0d/3b/3e/0d3b3e8a812df4ffbc470b4b9c566dca.jpg",
          slug: "eco-tote-bag",
        },
        {
          id: "4",
          slug: "ocean-shirt",
          name: "Ocean Shirt",
          details: "Sustainable Fabric",
          price: 15000.0,
          images: [
            "https://plus.unsplash.com/premium_photo-1692439050929-9c21209b0c29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            "https://plus.unsplash.com/premium_photo-1692439051710-f8c2de2f068d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
          ],
          colors: ["Blue", "Green", "Yellow", "Black", "Red"],
        },
      ];
      setAllProducts(mockProducts);
      setProducts(mockProducts);
    };

    fetchProducts();
  }, []); // Runs only once on component mount

  // Handle search functionality
  const handleSearch = (query) => {
    if (query.trim()) {
      const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  };

  return (
    <>
      {/* Pass handleSearch to ShopNavbar */}
      <ShopNavbar onSearch={handleSearch} />
      <Container>
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Get Inspired</h1>
          <p className="text-gray-600 max-w-3xl">
            Browsing for your next long-haul trip, everyday journey, or just
            fancy a look at what&#39;s new?
            <br /> From community favourites to about-to-sell-out items, see
            them all here.
          </p>
        </div>
      </Container>
      <Container className="py-8">
        {/* Filters will need props to control product display */}
        <Filters allProducts={allProducts} setProducts={setProducts} />
        {/* Pass filtered products to ProductCard */}
        <ProductCard products={products} />
      </Container>
    </>
  );
};

export default Shop;
