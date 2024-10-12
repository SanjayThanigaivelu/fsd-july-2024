import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartCount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState
})


export default cartSlice.reducer