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
    // modalToggle: (state, action) => {
    //   const indexOf = state.findIndex((item) => {
    //     return item.id === action.payload;
    //   });
    //   state[indexOf].modal = !state[indexOf].modal;
    // },
  },
});

export const { addProject, completeToggle, deleteProject, modalToggle } =
  craftSlice.actions;

export const selectNewProject = (state) => state.craft;
// export const selectModalToggle = (state) => state.craft[0].modal;

export default craftSlice.reducer;
