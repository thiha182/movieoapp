import { configureStore } from '@reduxjs/toolkit'
import movieoReducer from './MovieoSlice'

export const store = configureStore({
  reducer: {
    movieoData : movieoReducer
  },
})