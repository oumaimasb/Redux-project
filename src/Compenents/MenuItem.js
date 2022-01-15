import React from "react";
import "../Styles/MenuItem.css";
import ButtonAddRemoveItem from "./ButtonAddRemoveItem";

const MenuItem = ({ item }) => {
  const { id, name, info, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head-desc">
        <p className="head-desc-name">{name}</p>
        <p className="head-desc-info">
          <small>{info}</small>
        </p>
      </div>

      <div className="item-foot-desc">
        <span className="item-foot-price">{price}$</span>
        <ButtonAddRemoveItem quantity={21} />
      </div>
    </div>
  );
};

export default MenuItem;
