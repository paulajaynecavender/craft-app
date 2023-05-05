import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
    },
    completeToggle: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[indexOf].completed = !state[indexOf].completed;
    },
    deleteProject: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state.splice(indexOf, 1);
    },
    increment: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      console.log(indexOf, state[indexOf].counter);
      state[indexOf].counter += 1;
    },
    decrement: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[indexOf].counter -= 1;
      console.log(indexOf, state[indexOf].counter);
    },
    restart: (state, action) => {
      const indexOf = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[indexOf].counter = 0;
      console.log(indexOf, state[indexOf].counter);
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
export const counter = (state) => state.craft.counter;
// export const selectProjectCounterById =

export default craftSlice.reducer;
