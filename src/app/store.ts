import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/slices/CounterSlice";
import themeReducer from "../features/theme/slices/ThemeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
