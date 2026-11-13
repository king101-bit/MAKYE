import About from "@/components/layout/About";
import FeaturedProducts from "@/components/layout/FeaturedProducts";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
