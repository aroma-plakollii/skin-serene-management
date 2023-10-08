import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    email: string;
    password: string;
    hasErrors: boolean;
    loginCreds: boolean;
    isAdmin: boolean;
}

const initialState: LoginState = {
    email: '',
    password: '',
    hasErrors: false,
    loginCreds: false,
    isAdmin: true
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
            state.isAdmin = true;
        },
        hasError: (state: LoginState) => {
            state.hasErrors = true;
        },
        checkLoginCreds: (state: LoginState) => {
            state.loginCreds = true;
            state.hasErrors = true;
        },
        checkRole: (state: LoginState) => {
            state.hasErrors = true;
            state.isAdmin = false;
        },
        // isAdmin: (state: LoginState) => {
        //     state.hasErrors = false;
        //     state.isAdmin = true;
        // }
    },
});

export const {onInputChange, hasError, checkLoginCreds, checkRole} = AuthenticationSlice.actions;

export const authReducer =  AuthenticationSlice.reducer;