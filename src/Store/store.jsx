import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slice/ThemeSlice";
import eachProjectSlice from "./Slice/EachProjectSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    eachProject: eachProjectSlice,
  },
});

export default store;
