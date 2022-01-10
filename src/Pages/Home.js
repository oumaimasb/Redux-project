import React from "react";
import "../Styles/Home.css";
import Banner from "../Compenents/Banner";
import Menu from "../Compenents/Menu";
import Footer from "../Compenents/Footer";
import CartCount from "../Compenents/CartCount";

function Home() {
  return (
    <div>
      <Banner />
      <Menu />
      <Footer />
      <CartCount />
    </div>
  );
}

export default Home;
