import { createSlice } from "@reduxjs/toolkit";

//filter silce to store the filtered/search data
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    items: [],
    flag: false,
  },
  reducers: {
    addFilter: (state, action) => {
      state.items = action.payload;
    },
    removeFilter: (state, action) => {
      state.items = [];
    },
    setFlag: (state, action) => {
      state.flag = action.payload;
    },
  },
});

export const { addFilter, removeFilter, setFlag } = filterSlice.actions;
export default filterSlice.reducer;
