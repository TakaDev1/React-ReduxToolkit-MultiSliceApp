import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { toggleTheme } from "../slices/ThemeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-1/2 mx-auto py-5 ${theme ? "bg-gray-700 text-white" : "bg-white text-black"} rounded-lg`}
    >
      <h2 className={`${theme ? "text-white" : "!text-black"}`}>ThemeToggle</h2>
      <p className="py-5 font-bold">CurrentTheme: {theme ? "Dark" : "Light"}</p>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-gray-500 px-5 py-2 rounded-full hover:opacity-80 font-bold cursor-pointer"
      >
        ChangeTheme
      </button>
    </div>
  );
};

export default ThemeToggle;
