// export interface User{
//     name: String,
//     email: String,
//     password: String,
//     datOfBirth: Date,
//     role: String
// }

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    email: string;
    password: string;
    hasErrors: boolean;
    loginCreds: boolean;
    isAuthenticated: boolean;
}

const initialState: LoginState = {
    email: '',
    password: '',
    hasErrors: false,
    loginCreds: false,
    isAuthenticated: false
}

export const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        onInputChange: <K extends keyof LoginState>(
            state: LoginState,
            action: PayloadAction<{ key: K; value: LoginState[K] }>
        ) => {
            const { key, value } = action.payload;
            state[key] = value;
            state.hasErrors = false;
            state.loginCreds = false;
        },
        hasError: (state: LoginState) => {
            state.hasErrors = true;
        },
        // hasNoError: (state: LoginState) => {
        //     state.hasErrors = false;
        //     state.loginCreds = false;
        // },
        checkLoginCreds: (state: LoginState) => {
            state.loginCreds = true;
            state.hasErrors = true;
        },
        userisAuthenticated : (state: LoginState) => {
            state.isAuthenticated = true
        }
    },
});

export const {onInputChange, hasError, checkLoginCreds, userisAuthenticated} = AuthenticationSlice.actions;

export const authReducer =  AuthenticationSlice.reducer;