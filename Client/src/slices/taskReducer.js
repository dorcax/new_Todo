import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    tasks:[]
}


const taskSlice=createSlice({
    name:"task",
    initialState,
    reducers:{
        createTask:(state,action)=>{
            state.tasks = [...state.tasks,action.payload]
        },

        getTask:(state,action)=>{
            state.tasks =action.payload
        },
        
        updateTask:(state,action)=>{
            state.tasks =state.tasks.map((task)=>task.id ===action.payload.id ?{...task,...action.payload.task}:task)
        },
        deleteTask:(state,action)=>{
            state.tasks =state.tasks.filter((task)=>task.id !== action.payload)
        }
    }
})

export const{createTask,getTask,updateTask,deleteTask}=taskSlice.actions
export default taskSlice.reducer