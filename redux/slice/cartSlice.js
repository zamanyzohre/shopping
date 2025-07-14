'use client'


import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart: []
}
const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const {product,qty} = action.payload
            state.cart = [...state.cart,{...product,qty:qty}]
            // console.log(state.cart);
        },
        removeFromCart:(state,action) =>{
            state.cart = state.cart.filter(p=> p.id !== action.payload)
        },
        increament:(state,action) =>{
            state.cart = state.cart.map(p=>p.id === action.payload? {...p,qty:p.qty+1}:p)
        },
        decreament:(state,action) =>{
            state.cart = state.cart.map(p=>p.id === action.payload? {...p,qty:p.qty-1}:p)
        },
        deleteCart:(state,action)=>{
            state.cart =[]
        }
    }
})


export const { addToCart,removeFromCart,increament,decreament,deleteCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
