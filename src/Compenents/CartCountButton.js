import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../Styles/CartCountButton.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../Redux/CartSelector";

const CartCountButton = ({ cartCount }) => {
  const history = useHistory();
  return (
    <div className="btnCartCount" onClick={() => history.push("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCountButton);
