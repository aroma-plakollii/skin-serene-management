import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
    id: string,
    name: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    role: string
} 

export interface UserState{
    users: UserInterface[];
    user: UserInterface;
    isDeleted: boolean;
    hasErrors: boolean;
}

const initialState: UserState = {
    users: [],
    user: {} as UserInterface,
    isDeleted: false,
    hasErrors: false
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userList: (state: UserState, action) => {
            state.users = action.payload;
        },
        deletedUser: (state: UserState) => {
            state.isDeleted = true;
        },
        onInputChange: <K extends keyof UserInterface>(
            state: UserState,
            action: PayloadAction<{ key: K; value: UserInterface[K] }>
          ) => {
            const { key, value } = action.payload;
            state.user[key] = value;
            state.hasErrors = false;
        },
        onHasNoError: (state: UserState) => {
            state.hasErrors = false;
        },
        onHasError: (state: UserState) => {
            state.hasErrors = true;
        }
    },
    // serialize: {
    //     // Allow Date serialization
    //     Date: (date) => date.toISOString(),
    // },
});
export const {userList, deletedUser, onInputChange, onHasNoError, onHasError} = UserSlice.actions;
export const userReducer = UserSlice.reducer;