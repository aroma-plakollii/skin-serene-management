import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch,TypedUseSelectorHook } from "react-redux";
import { authReducer } from "./features/authenticationSlice";
import { userReducer } from "./features/userSlice";
import { pagignationReducer } from "./features/pagignationSlice";

export const store = configureStore({
    reducer: { auth: authReducer, user: userReducer, pagignation: pagignationReducer },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/onInputChange'],
        ignoredPaths: ['user.user.dateOfBirth'],
        ignoredActionPaths: ['payload.value.dateOfBirth'],
      },
    }),
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:import("react-redux").TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;