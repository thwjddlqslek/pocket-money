import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";
import spendReducer from "./spendSlice";

const store = configureStore({
  reducer: {
    income: incomeReducer,
    spend: spendReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
