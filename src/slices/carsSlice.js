import { createSlice } from "@reduxjs/toolkit";
import cars from "../db/cars_db";

const initialState = {
  cars: cars,
  selectedCar: cars[0].name,
  //carList: [cars[0].name], // нужно ли вообще сюда писать addCar?
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    selectedCar: (state, action) => {
      state.selectedCar = action.payload; // payload - какой-либо элемент который мы хотим передать
    },
    /*addCar: (state, action) => {
      state.carList.push(action.payload);
    },*/
  },
});

// Action creators are generated for each case reducer function
export const { selectedCar } = carsSlice.actions;

export default carsSlice.reducer;
