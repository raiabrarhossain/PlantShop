import { createSlice } from '@reduxjs/toolkit'
import productsData from '../../data/products'


const initialState = {
items: productsData,
}


const productsSlice = createSlice({
name: 'products',
initialState,
reducers: {
// keeping products immutable for this assignment; all cart state lives in cartSlice
},
})


export default productsSlice.reducer