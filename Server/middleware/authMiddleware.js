const jwt =require("jsonwebtoken")
const asyncHandler =require("express-async-handler")
const db =require("../db/db")


const isAuthenticated =asyncHandler(async(req,res,next)=>{
    let token;
    token =req.cookies.jwt
    if(token){
        try {
            const decoded =jwt.verify(token,process.env.JWT_SECRET)
            req.user =await db.user.findUnique({
                where:{
                    id:decoded.userId
                }
            })
            next()
        } catch (error) {
            throw new Error("invalid token")
        }
       
    }else{
        throw new Error(" Unauthorized, no token found")
    }

})
module.exports =isAuthenticated