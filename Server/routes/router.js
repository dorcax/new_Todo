const express =require("express")
const router =express.Router()
const isAuthenticated =require("../middleware/authMiddleware")
const {createTask,getTask,getUpdate,getDelete,getAllTask} =require("../controller/todoController")

router.route("/")
.post(isAuthenticated,createTask)
.get(isAuthenticated,getAllTask)

router.route("/:taskId")
.get(isAuthenticated,getTask)
.patch(isAuthenticated,getUpdate)
.delete(isAuthenticated,getDelete)



module.exports=router


