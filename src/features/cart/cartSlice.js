import { createSlice } from '@reduxjs/toolkit'


const initialState = {
items: {}, // { [productId]: { id, name, price, thumb, qty } }
}


const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
addToCart: (state, action) => {
const p = action.payload
if (state.items[p.id]) return // if already in cart, do nothing (button should be disabled)
state.items[p.id] = { ...p, qty: 1 }
},
increment: (state, action) => {
const id = action.payload
if (state.items[id]) state.items[id].qty += 1
},
decrement: (state, action) => {
const id = action.payload
if (state.items[id]) {
state.items[id].qty -= 1
if (state.items[id].qty <= 0) delete state.items[id]
}
},
removeItem: (state, action) => {
const id = action.payload
if (state.items[id]) delete state.items[id]
},
clearCart: (state) => {
state.items = {}
},
},
})


export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer