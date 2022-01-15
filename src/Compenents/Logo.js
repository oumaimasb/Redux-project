import React from "react";
import "../Styles/Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src="../Images/logo.png" alt="logo" />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p>
        <b>Restaurant & BBQ</b>
      </p>
    </div>
  );
};

export default Logo;
