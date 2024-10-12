import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 100,
    email: "sagar@sagar.cc"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        bigIncrement: (state) => {
            state.value = state.value + 5;
        }
    }
})

export const { increment, bigIncrement } = counterSlice.actions

export default counterSlice.reducer;
