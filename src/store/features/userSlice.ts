import { createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date,
    role: String
} 

export interface UserState{
    users: UserInterface[];
    isDeleted: boolean
}

const initialState: UserState = {
    users: [],
    isDeleted: false
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userList: (state: UserState, action) => {
            state.users = action.payload
        }
    }
});

export const {userList} = UserSlice.actions;
export const userReducer = UserSlice.reducer;