import { createSlice } from "@reduxjs/toolkit"

export interface PagignationState{
    currentPage: number,
    totalPages: number,
    itemsPerPage: number
}

export const initialState: PagignationState = {
    currentPage: 0,
    totalPages: 0,
    itemsPerPage: 5
}

export const pagignationSlice = createSlice({
    name: 'pagignation',
    initialState,
    reducers: {
        setTotalPages: (state: PagignationState, actions) => {
            state.totalPages = actions.payload;
        },
        setCurrentPage: (state: PagignationState, actions) => {
            state.currentPage = actions.payload;
        },
        setCurrentPageLower: (state: PagignationState) => {
            state.currentPage = state.currentPage - 1;
        }
    }
});

export const {setTotalPages, setCurrentPage, setCurrentPageLower} = pagignationSlice.actions;
export const pagignationReducer = pagignationSlice.reducer;