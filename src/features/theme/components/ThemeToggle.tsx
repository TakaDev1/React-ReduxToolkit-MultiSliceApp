import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { toggleTheme } from "../slices/ThemeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>ThemeToggle</h2>
      <p>CurrentTheme: {theme ? "Dark" : "Light"}</p>
      <button onClick={() => dispatch(toggleTheme())}>ChangeTheme</button>
    </div>
  );
};

export default ThemeToggle;
