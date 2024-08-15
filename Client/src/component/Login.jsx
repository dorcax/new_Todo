import React, { useState } from 'react'
import { useLoginMutation } from '../slices/userApislice'
import{useDispatch,useSelector} from"react-redux"
import { login } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [data,setData] =useState({email:"",password:""})
    
     const[loginApi] =useLoginMutation()
     const dispatch =useDispatch()
     const navigate =useNavigate()


    const handleChange =(e)=>{
        const{name,value} =e.target
        setData((prev)=>({...prev,[name]:value}))
    }


    // for submission
    const handleSubmit =async(e)=>{
        e.preventDefault()
    try {
        const result =await loginApi({email:data.email,password:data.password}).unwrap()
        dispatch(login(result))
        console.log("user logged in")
        navigate("/")
    } catch (error) {
        console.log(error)
    }
    }
  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className='flex flex-col capitalize'>
            <label htmlFor="" className='font-semibold'>email</label>
            <input type="email" name="email" id=""  onChange={handleChange} value={data.email} className='border-2 w-64 outline-none border-green-700 rounded-md p-2  px-3 my-3'/>
        </div>
        <div className='flex flex-col capitalize'>
            <label htmlFor="" className='font-semibold'>password</label>
            <input type="password" name="password" id=""  onChange={handleChange} value={data.password} className='border-2 w-64 outline-none border-green-700 rounded-md p-2  px-3 my-3'/>
        </div>
        <button type="submit" className='bg-black w-32 text-white py-2 rounded-md capitalize font-semibold'>sign in</button>
      </form>
    </div>
  )
}

export default Login