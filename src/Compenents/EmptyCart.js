import React from "react";
import "../Styles/EmptyCart.css";
import { useHistory } from "react-router";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className="emtycart">
      <img src="../Images/Emtycart.png" alt="emty" />
      <button onClick={() => history.push("/")}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
