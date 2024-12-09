import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectImage: undefined,
  projectName: undefined,
  projectLiveDemo: undefined,
  projectDescription: undefined,
};

const eachProjectSlice = createSlice({
  name: "eachProject",
  initialState: initialState,
  reducers: {
    addEachProjectImage: (state, action) => {
      state.projectImage = action.payload;
    },
    addEachProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    addEachProjectLiveDemo: (state, action) => {
      state.projectLiveDemo = action.payload;
    },
    addEachProjectDescription: (state, action) => {
      state.projectDescription = action.payload;
    },
  },
});

export const {
  addEachProjectImage,
  addEachProjectName,
  addEachProjectLiveDemo,
  addEachProjectDescription,
} = eachProjectSlice.actions;

export default eachProjectSlice.reducer;
