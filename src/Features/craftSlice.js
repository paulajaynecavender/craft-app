import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "",
    type: "",
    description: "",
    completed: false,
    modal: false,
    counter: 0,
  },
];

export const craftSlice = createSlice({
  name: "craft",
  initialState,
  reducers: {},
});

export default craftSlice.reducer;
