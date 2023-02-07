import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsSlice, cartSlice, usersSlice } from "../slices/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  carsSlice,
  cartSlice,
  usersSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
