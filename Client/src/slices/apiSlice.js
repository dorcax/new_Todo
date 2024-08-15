import{createApi,fetchBaseQuery} from"@reduxjs/toolkit/query/react"


// createApi is afunction in RTKquery that allow us to create endpoint for api ,provide tools for fetching,caching and synchronizing data in our application

// fetcBaseQuery is a function allow us to perform a fetch query on the createapi



const baseQuery = fetchBaseQuery({
    baseUrl:""
})



export const apiSlice =createApi({
    baseQuery,
    tagTypes:["User"],
    endpoints:(builder)=>({
        
    })
})