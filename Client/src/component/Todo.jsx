import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = () => {
    const [data,setData] =useState({
        title:"",description:""
    })
    const[result,setResult] =useState([])
    const[error,setError]=useState(null)
    const navigate =useNavigate()

    const handleChange =(e)=>{
        const{name,value}=e.target
        setData((prev)=>({...prev,[name]:value}))

    }
    
    const handleSubmission =async(e)=>{
       try {
        e.preventDefault()
        const results =await fetch("https://new-todo-1htm.onrender.com/task",{
          method:"POST",
          headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
          },
          body:JSON.stringify(data)

        })

        if(!results.ok){
           throw new Error("error in creating task")
        }
        const res =await results.json()
            setResult((prev)=>([...prev,res]))
            console.log("task created successfully")
            navigate("/task")

       } catch (error) {
        setError(error.message,"there is an error when created thhe task")
       }


    }
  return (
    <div>
        <form action="" method="post" className='' onSubmit={handleSubmission}>
            <div className='flex flex-col py-2'>
                <label htmlFor="">Title</label>
                <input type="text" name="title" id=""   value={data.title} className='border  w-full max-w-80 py-2 rounded-md mx-4 shadow-md outline-none hover:border-green-800 px-4' onChange={handleChange}/>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="">description</label>
                <input type="text" name="description" id=""  value={data.description} className='border  w-full max-w-80 py-2 rounded-md mx-4 shadow-md outline-none hover:border-green-800 px-4'  onChange={handleChange}/>
            </div>
           <div className='bg-green-800 max-w-40 mx-auto my-3 text-center'> <button type="submit"  className='capitalize text-white'>submit</button></div>
        </form>
    </div>
  )
}

export default Todo