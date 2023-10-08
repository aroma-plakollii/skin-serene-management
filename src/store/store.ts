import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch,TypedUseSelectorHook } from "react-redux";
import { authReducer } from "./features/authenticationSlice";
import { userReducer } from "./features/userSlice";

export const store = configureStore({
    reducer: { auth: authReducer, user: userReducer },
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:import("react-redux").TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;