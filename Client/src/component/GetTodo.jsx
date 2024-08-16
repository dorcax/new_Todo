import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetTasksQuery } from '../slices/userApislice'
import { useDeleteTaskMutation } from '../slices/userApislice'
import { useDispatch,useSelector } from 'react-redux'
import { getTask ,deleteTask} from '../slices/taskReducer'
// import { deleteTask } from '../slices/taskReducer'

const GetTodo = () => {
  // const [data,setData] =useState([])
  // const[error,setError] =useState(null)
  const{data}=useGetTasksQuery()
  const[deleteTaskApi] =useDeleteTaskMutation()
  const dispatch=useDispatch()

  const {tasks}=useSelector((state)=>state.task)

//   useEffect(()=>{
//    const fetchPost =async()=>{
//   try {
//     // const res =await fetch("https://new-todo-1htm.onrender.com/task")
//     //   if(res.ok){
//     //     const result =await res.json()
//     //    setData(result.task)
//     //    console.log(result.task)
//     //   }(
//     // const res =await getTaskApi()
//     if(getTaskApi){
//       const task =getTaskApi.task
//       console.log(Array.isArray(task))
//       dispatch(getTask(task))
//     }
  
//   } catch (error) {
//     // setError(error.message,"error in fetching the error")
//     console.log(error)
    
//   }
//  }
//  fetchPost()
//   },[getTaskApi,dispatch])

  const handleDelete =async(id)=>{
    try {
      // const task =await fetch(`https://new-todo-1htm.onrender.com/task/${id}`,{
      //   method:"DELETE"
      // })
      // if(task.ok){
      //   const res =await task.json()
      //   // console.log(res)
      //   setData((prev)=>prev.filter((task)=>(task.id !==id)))
      //   console.log("task deleted successfully")
      // }

      const res =await deleteTaskApi(id).unwrap()
      dispatch(deleteTask(res))
      
    } catch (error) {
      // setError(error.message,"error when deleting the task")
      console.log(error)
    }
  }
  return (
    <div>
      <ul>
        {data.map((task)=>(
          <li className='flex gap-10' key={task.id}>
            <h4> {task.description}</h4>
        <button className='text-red-800 text-xl font-bold' onClick={()=>handleDelete(task.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <button className='w-24 bg-green-800 mt-4 rounded-md text-white capitalize' ><Link to="/">new form</Link></button>
    </div>
  )
}

export default GetTodo