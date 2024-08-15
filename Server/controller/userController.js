const db =require("../db/db")
const asyncHandler =require("express-async-handler")
const bcrypt =require("bcrypt")
const generateToken =require("../utils/generateToken")

module.exports.createUser =asyncHandler(async(req,res)=>{
    const{name,email,password} =req.body
    // find if user email exist 
    const emailExist =await db.user.findUnique({
        where:{
            email:req.body.email
        }
    })
    if(emailExist){
        throw new Error("user email already exist")
    }
    // create a new user 
    const salt =await bcrypt.genSalt(10)
    const hashedPassword =await bcrypt.hash(password,salt)
    
    const newUser =await db.user.create({
        data:{name,email,
            password:hashedPassword

        }
    })

    res.status(201).json({user:newUser})

})



// login user 


module.exports.LoginUser =asyncHandler(async(req,res)=>{
    const {email,password} =req.body
    // find the email
    const user =await db.user.findUnique({
        where:{
            email:req.body.email
        }
    })
    if(user){
        // compare password 
        const isMatch =await bcrypt.compare(password,user.password)
        if(isMatch){
            generateToken(res,user.id)
            res.status(200).json({user:user})
        }else{
            throw new Error("invalid user")
        }
    }else{
        throw new Error("invalid email or password")
    }
})


module.exports.logOut =asyncHandler(async(req,res)=>{
    res.cookie("jwt","",{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:"user logged out"})
})