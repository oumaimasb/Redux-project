import React, { useRef } from "react";
import "../Styles/Home.css";
import Banner from "../Compenents/Banner";
import Menu from "../Compenents/Menu";
import Footer from "../Compenents/Footer";
import CartCountButton from "../Compenents/CartCountButton";
import { menuItemsData } from "../Compenents/Data";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountButton />
    </div>
  );
};
export default Home;
