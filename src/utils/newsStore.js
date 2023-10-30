import { configureStore } from "@reduxjs/toolkit";
import allSlice from "./allSlice";
import filterSlice from "./filterSlice";

//Redux store
const store = configureStore({
  reducer: {
    all: allSlice,
    filter: filterSlice,
  },
});

export default store;
