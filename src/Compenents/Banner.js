import React from "react";
import "../Styles/Banner.css";
import Logo from "./Logo";

const Banner = ({ handleScrollMenu }) => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious food for you cravings</h1>
          <p>We made fresh and healthy meals with different recipes</p>
          <button onClick={handleScrollMenu}>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img src="../Images/banner.png" alt="banner" className="header-img" />
    </header>
  );
};

export default Banner;
