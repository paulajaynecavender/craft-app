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
        modal: false,
        counter: 0,
      };
      state.push(newProject);
    },
    completeToggle: (state, action) => {
      const indexOf = state.findIndex((project) => {
        return project.id === action.payload;
      });
      console.log("index=", indexOf);
      // state.completed = !state.completed;
    },
  },
});

export const { addProject, completeToggle } = craftSlice.actions;

export const selectNewProject = (state) => state.craft;

export default craftSlice.reducer;
