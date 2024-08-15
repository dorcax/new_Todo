const jwt =require("jsonwebtoken")



const generateToken =async(res,userId)=>{
    const  token =jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:30*60*60*1000,
        sameSite:"strict",
        secure:process.env.NODE_ENV ==="production"
    })
}


module.exports =generateToken