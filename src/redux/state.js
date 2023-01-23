import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"

 export const state = configureStore({
    reducer:{
        auth:authReducer
    }
})
