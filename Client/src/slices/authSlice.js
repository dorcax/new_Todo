import {createSlice} from "@reduxjs/toolkit"



const initialState ={
    isAuthenticated:false,
    userInfo:localStorage.getItem("userInfo") ?JSON.parse(localStorage.getItem("userInfo")):null
}

const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        register:(state,action)=>{
            state.isAuthenticated =false,
            state.userInfo =action.payload
        },
        login:(state,action)=>{
            state.isAuthenticated =true,
            state.userInfo =action.payload
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        },
        logout:(state,action)=>{
            state.isAuthenticated =false,
            state.userInfo=null,
            localStorage.removeItem("userInfo")
        }
    }
})


export const{register,login,logout} =authSlice.actions
export default authSlice.reducer