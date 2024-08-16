import {apiSlice} from "./apiSlice"

const USER_URL ="/api/user";
const TASK_URL="/api/task"


export const userApiSlice =apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/`,
                method:"POST",
                body:data
            })
        }),
        login:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/login`,
                method:"POST",
                body:data
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:`${USER_URL}/logout`,
                method:"POST"
            })
        }),
        // task endpoint
        newTask:builder.mutation({
            query:(data)=>({
                url:`${TASK_URL}/`,
                method:"POST",
                body:data
            })
        }),
        getTasks:builder.query({
            query:()=>({
                url:`${TASK_URL}/`,
                method:"GET",
            })
        }),
        deleteTask:builder.mutation({
            query:(taskId)=>({
                url:`${TASK_URL}/${taskId}`,
                method:"DELETE"
            })
        })
    })
})


export const{useRegisterMutation,useLoginMutation,useLogoutMutation,useNewTaskMutation,useGetTasksQuery,useDeleteTaskMutation}=userApiSlice