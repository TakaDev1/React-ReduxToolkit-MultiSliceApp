import { createSlice } from "@reduxjs/toolkit";
import type { ThemeType } from "../types/ThemeType";

const initialState: ThemeType = { darkMode: false };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeType) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
