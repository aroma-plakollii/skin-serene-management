import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch,TypedUseSelectorHook } from "react-redux";
import { authReducer } from "./features/authenticationSlice";

export const store = configureStore({
    reducer: { auth: authReducer },
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:import("react-redux").TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;