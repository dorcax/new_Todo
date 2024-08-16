import{configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import taskReducer from "./slices/taskReducer"
import { apiSlice } from "./slices/apiSlice"



const store =configureStore({
    reducer:{
        auth:authReducer,
        task:taskReducer,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})



export default store