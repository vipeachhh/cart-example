import React, { useState } from "react";
import CarsItem from "../components/CarsItem";
import { useSelector, useDispatch } from "react-redux";
import { selectedCar } from "../slices/carsSlice";
import styled from "styled-components";
import { addToCart } from "../slices/cartSlice";
//import { Redirect } from "react-router-dom";

// import swapiHeroes from '../db/cars_db';
// import cars from '../db/cars_db';

const StyledBasket = styled.div`
  font-size: 24px;
  color: green;
  text-shadow: 5px 5px 5px #000;
`;

function HomePage() {
  const {
    cars,
    selectedCar: selCar,
    //carList,
  } = useSelector((state) => state.carsSlice);
  const { cart } = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  //const { cart } = useSelector((state) => state.cartSlice);
  let [input, setInput] = useState("");

  function searchCar(event) {
    const { value } = event.target; // где был клик
    setInput(value.toLowerCase());
  }

  //{JSON.stringify(carList)}
  return (
    <div className="App">
      <div style={{ color: "green" }}>
        Selected car: {selCar.name ? selCar.name : "Please select a car"}
      </div>
      <div>
        <input onChange={searchCar} placeholder="Car name:" />
        <div className="cart">
          <StyledBasket>
            Your basket:
            {cart.length}
          </StyledBasket>
        </div>
        <div className="items">
          <div className="items-shop">
            {cars
              .filter((item) => item.name.toLowerCase().includes(input))
              .map((item) => {
                return (
                  <div>
                    <CarsItem
                      onClick={() => dispatch(selectedCar(item))}
                      key={item.id}
                      item={item}
                    ></CarsItem>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
