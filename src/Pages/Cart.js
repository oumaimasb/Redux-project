import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../Redux/CartSelector";
import EmptyCart from "../Compenents/EmptyCart";
import Footer from "../Compenents/Footer";
import Logo from "../Compenents/Logo";
import Menu from "../Compenents/Menu";

import "../Styles/Cart.css";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <div>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your Total: $ {cartTotal}</h3>
        </div>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
