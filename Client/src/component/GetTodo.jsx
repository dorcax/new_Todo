import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GetTodo = () => {
  const [data,setData] =useState([])
  const[error,setError] =useState(null)
  useEffect(()=>{
   const fetchPost =async()=>{
  try {
    const res =await fetch("https://new-todo-1htm.onrender.com/task")
      if(res.ok){
        const result =await res.json()
       setData(result.task)
       console.log(result.task)
      }
  } catch (error) {
    setError(error.message,"error in fetching the error")
    
  }
 }
 fetchPost()
  },[])

  const handleDelete =async(id)=>{
    try {
      const task =await fetch(`https://new-todo-1htm.onrender.com/task/${id}`,{
        method:"DELETE"
      })
      if(task.ok){
        const res =await task.json()
        // console.log(res)
        setData((prev)=>prev.filter((task)=>(task.id !==id)))
        console.log("task deleted successfully")
      }
    } catch (error) {
      setError(error.message,"error when deleting the task")
    }
  }
  return (
    <div>
      <ul>
        {data && data.map((task)=>(
          <li className='flex gap-10'>
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