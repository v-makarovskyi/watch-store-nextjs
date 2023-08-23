import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: {
        type: '',
    }
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy.type = action.payload
        },
        clearSortBy: (state, action) => {
            state.sortBy.type = ''
        }
    }
})

export const {setSortBy, clearSortBy} = sortSlice.actions

export default sortSlice.reducer