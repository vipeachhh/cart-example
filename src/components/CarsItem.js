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

export default function CarsItem(item, onClick) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
    console.log();
  };

  return (
    <div>
      <div>
        Name:{" "}
        <div onClick={onClick} key={item.id} style={{ color: "blue" }}>
          {item.name}
        </div>
      </div>
      <div>
        Price: <b>{item.price}</b>
      </div>{" "}
      <StyledButtonAddPro onClick={handleClick}></StyledButtonAddPro>
      {isShown && <StyledButtonDeletePro />}
    </div>
  );
}

function StyledButtonAddPro(item) {
  const dispatch = useDispatch();
  return (
    <div>
      <StyledButtonAdd onClick={() => dispatch(addToCart(item))} />
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

CarsItem.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

CarsItem.defaultProps = {
  onClick: () => {},
  name: "goida",
};
