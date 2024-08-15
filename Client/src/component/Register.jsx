import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRegisterMutation } from '../slices/userApislice'
import{useDispatch,useSelector} from"react-redux"
import{useNavigate} from"react-router-dom"
import{register} from"../slices/authSlice"
const Register = () => {
    const [data,setData] =useState({name:'',email:"",password:""})
    const [registerApi] =useRegisterMutation()
    const dispatch =useDispatch()
    const navigate =useNavigate()

    const {userInfo} =useSelector((state)=>state.auth)
    useEffect(()=>{
      if(userInfo){
        navigate("/")
      }
    },[navigate,userInfo])
    
    const handleChange =(e)=>{
        const{name,value} =e.target
        setData((prev)=>({...prev,[name]:value}))
    } 

    // for submission
    const handleSubmission =async(e)=>{
        e.preventDefault()
        try {
            const res =await registerApi({name:data.name,email:data.email,password:data.password}).unwrap()
            dispatch(register(res))
            navigate("/login")
            console.log("register confirmed")
        } catch (error) {
            console.log(error)
            
        }
        
    }
  return (
    <div>
        <form action="" method="post" onSubmit={handleSubmission}>
            <div className='flex flex-col capitalize'>
                <label htmlFor="" className='font-semibold'>name:</label>
                <input type="text" name="name" id="" onChange={handleChange} value={data.name} className='border-2 w-64 outline-none border-green-700 rounded-md p-2  px-3 my-3'/>
            </div>
            <div className='flex flex-col capitalize'>
                <label htmlFor="" className='font-semibold'>email:</label>
                <input type="email" name="email" id=""  onChange={handleChange} value={data.email} className='border-2 w-64 outline-none border-green-700 rounded-md p-2  px-3 my-3'/>
            </div>
            <div className='flex flex-col capitalize'>
                <label htmlFor="" className='font-semibold'>password:</label>
                <input type="password" name="password" id="" onChange={handleChange} value={data.password} className='border-2 w-64 outline-none border-green-700 rounded-md p-2  px-3 my-3' />
            </div>
            <button type="submit" className='bg-black w-32 text-white py-2 rounded-md capitalize font-semibold'>sign up</button>
        </form>
    </div>
  )
}

export default Register