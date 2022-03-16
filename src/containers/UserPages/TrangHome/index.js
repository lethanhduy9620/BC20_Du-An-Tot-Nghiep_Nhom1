import React from "react";
import HomeNav from "./_components/Navbar";
import Carousel from "./Carousel";
import Footer from "./_components/Footer";
import Discover from "./Dicover";
import Shop from "./Shop";
import Trip from "./Trip";
export default function TrangHome() {
  return (
    <div>
      <HomeNav />
      <Carousel />
      <Trip />
      <Discover />
      <Shop />
      <Footer />
    </div>
  );
}
