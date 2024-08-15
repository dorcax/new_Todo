const express =require("express")
const router =express.Router()

const { createUser,LoginUser, logOut } =require("../controller/userController")



// router.route("/").post(createUser)
// .post(LoginUser)

router.post("/",createUser)
router.post("/login",LoginUser)
router.post("/logout",logOut)


module.exports =router