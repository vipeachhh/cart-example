import React from "react";
import PropTypes from "prop-types";
import { addIcon, deleteIcon } from "../assets";
import {
  incrementAmount,
  decrementAmount,
  removeItem,
} from "../slices/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ id, name, price, amount = 0 }) {
  const dispatch = useDispatch();

  //<img src={addIcon} alt="" />
  //<img src={deleteIcon} alt="" />
  return (
    <div className="cartItem">
      <div className="itemName">Name: {name}</div>
      <div className="itemPrice">Price: {price}</div>
      <div className="cartItem_incDec">
        <button onClick={() => dispatch(incrementAmount(id))}></button>
        <div>{amount}</div>
        <button onClick={() => dispatch(decrementAmount(id))}></button>
      </div>
      <div className="cartItem_remove">
        <button onClick={() => dispatch(removeItem(id))}>Remove</button>
      </div>
    </div>
  );
}

CartItem.PropTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

CartItem.defaultProps = {
  onClick: () => {},
  name: "goida",
};

export default CartItem;
