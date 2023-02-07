import React from "react";
import PropTypes from "prop-types";
import { addIcon, deleteIcon } from "../assets";
import { addToCart, removeItem } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

const StyledButtonAdd = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${addIcon});
  background-size: cover;
`;

const StyledButtonDelete = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${deleteIcon});
  background-size: cover;
  margin-left: 10px;
`;



function StyledButtonAddPro({ onClick }) {

  return (
    <div>
      <StyledButtonAdd onClick={onClick} />
    </div>
  );
}

function StyledButtonDeletePro() {
  return (
    <div>
      <StyledButtonDelete />
    </div>
  );
}



export default function CarsItem({ item, inCart }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
     dispatch(addToCart(item))
  };

  return (
    <div>
      <div>
        Name:{" "}
        <div style={{ color: "blue" }}>
          {item.name}
        </div>
      </div>
      <div>
        Price: <b>{item.price}</b>
      </div>{" "}

      <StyledButtonAddPro onClick={handleClick}></StyledButtonAddPro>
      {inCart && <StyledButtonDeletePro />}
    </div>
  );
}

CarsItem.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

CarsItem.defaultProps = {
  onClick: () => {},
  name: "goida",
};
