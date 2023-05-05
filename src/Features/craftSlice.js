import { createSlice } from "@reduxjs/toolkit";
import { store, retrieve } from "../App/storage";

const retrStore = retrieve("store");

const initialState = retrStore || [];

export const craftSlice = createSlice({
  name: "craft",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: Math.random() * 1000,
        name: action.payload.name,
        type: action.payload.type,
        description: action.payload.description,
        completed: false,
        counter: 0,
      };
      state.push(newProject);
      store("store", state);
    },
    completeToggle: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[indexOf].completed = !state[indexOf].completed;
      store("store", state);
    },
    deleteProject: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state.splice(indexOf, 1);
      store("store", state);
    },
    increment: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[indexOf].counter += 1;
      store("store", state);
    },
    decrement: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[indexOf].counter -= 1;
      store("store", state);
    },
    restart: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[indexOf].counter = 0;
      store("store", state);
    },
  },
});

export const {
  addProject,
  completeToggle,
  deleteProject,
  increment,
  decrement,
  restart,
} = craftSlice.actions;

export const selectProject = (state) => state.craft;

export default craftSlice.reducer;
