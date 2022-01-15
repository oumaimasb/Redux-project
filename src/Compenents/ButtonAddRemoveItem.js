import React from "react";
import "../Styles/ButtonAddRemoveItem.css";

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="btnAddRemove-postive">
          <i className="fa fa-minus-circle" onClick={handleRemoveItem}></i>
          <span>{quantity}</span>
          <i className="fas fa-plus-circle" onClick={handleAddItem}></i>
        </div>
      ) : (
        <div className="btnAddRemove-negative" onClick={handleAddItem}>
          <span>ADD</span>
          <i className="fas fa-plus-circle"></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
