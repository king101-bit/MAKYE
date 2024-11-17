import { Container } from "react-bootstrap";
import ShopNavbar from "../Components/ShopNavbar";
import Filters from "../Components/Filters";
import "../assets/shop.css";
import ProductCard from "../Components/ProductCard";

const Shop = () => {
  return (
    <>
      <ShopNavbar />
      <Container className="py-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Get Inspired</h1>
          <p className="text-gray-600 max-w-3xl">
            Browsing for your next long-haul trip, everyday journey, or just
            fancy a look at what&#39;s new? From community favourites to
            about-to-sell-out items, see them all here.
          </p>
        </div>
        <Filters />
        <ProductCard />
      </Container>
      {/* Add your Shop components here */}
    </>
  );
};

export default Shop;
