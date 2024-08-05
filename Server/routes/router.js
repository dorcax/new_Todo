const express =require("express")
const router =express.Router()

const {createTask,getTask,getUpdate,getDelete,getAllTask} =require("../controller/todoController")

router.post("/",createTask)
router.get("/",getAllTask)
router.get("/:id",getTask)
router.patch("/:id",getUpdate)
router.delete("/:id",getDelete)


module.exports=router


