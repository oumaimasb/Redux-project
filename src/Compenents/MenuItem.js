import React from "react";
import "../Styles/MenuItem.css";
import ButtonAddRemoveItem from "./ButtonAddRemoveItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartAddItem, cartRemoveItem } from "../Redux/CartAction";
import { selectCartItems, selectCartItemsCount } from "../Redux/CartSelector";

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, name, info, price, img } = item;
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };
  return (
    <div className="item" key={id}>
      <img src={img} alt="item" />
      <div className="item-head-desc">
        <p className="head-desc-name">{name}</p>
        <p className="head-desc-info">
          <small>{info}</small>
        </p>
      </div>

      <div className="item-foot-desc">
        <span className="item-foot-price">{price}$</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
