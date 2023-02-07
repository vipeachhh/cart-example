import React from "react";
import PropTypes from "prop-types";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

function Item({ id, name, price }) {
  const dispatch = useDispatch();
  return (
    <div className="Item">
      <div className="item_Name">Name: {name}</div>
      <div className="item_Price">Price: {price}</div>
      <button onClick={() => dispatch(addToCart({ id, name, price }))}>
        Add to basket
      </button>
    </div>
  );
}

export default Item;
