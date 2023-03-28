import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import likeReducer from './likeReducer'
import productsReducer from './productsReducer'

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: cartReducer,
        products: productsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch