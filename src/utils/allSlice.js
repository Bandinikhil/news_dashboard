import { createSlice } from "@reduxjs/toolkit";

//slice to store all the data fetched from API
const allSlice = createSlice({
  name: "all",
  initialState: {
    items: null,
  },
  reducers: {
    addAll: (state, action) => {
      state.items = action.payload;
    },
    removeAll: (state, action) => {
      state.items = [];
    },
  },
});

export const { addAll, removeAll } = allSlice.actions;
export default allSlice.reducer;
