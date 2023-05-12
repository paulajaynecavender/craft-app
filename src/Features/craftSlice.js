import { createSlice } from "@reduxjs/toolkit";
import { store, retrieve } from "../App/storage";

const retrStore = retrieve("store");

const initialState = retrStore || {
  projects: [],
  filteredStatus: "",
};

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
      state.projects.push(newProject);
      store("store", state);
    },
    completeToggle: (state, action) => {
      const indexOf = state.projects.findIndex((item) => {
        return item.id === action.payload;
      });
      state.projects[indexOf].completed = !state.projects[indexOf].completed;
      store("store", state);
    },
    deleteProject: (state, action) => {
      const indexOf = state.projects.findIndex((item) => {
        return item.id === action.payload;
      });
      state.projects.splice(indexOf, 1);
      store("store", state);
    },
    increment: (state, action) => {
      const indexOf = state.projects.findIndex((item) => {
        return item.id === action.payload;
      });
      state.projects[indexOf].counter += 1;
      store("store", state);
    },
    decrement: (state, action) => {
      const indexOf = state.projects.findIndex((item) => {
        return item.id === action.payload;
      });
      state.projects[indexOf].counter -= 1;
      store("store", state);
    },
    restart: (state, action) => {
      const indexOf = state.projects.findIndex((item) => {
        return item.id === action.payload;
      });
      state.projects[indexOf].counter = 0;
      store("store", state);
    },
    filteredStatus: (state, action) => {
      state.filteredStatus = action.payload;
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
  filteredStatus,
} = craftSlice.actions;

export const selectProject = (state) => state.craft.projects;
export const selectFilter = (state) => state.craft.filteredStatus;

export default craftSlice.reducer;
