const db =require("../db/db")

module.exports.createTask =async(req,res)=>{
    const{title,description} =req.body
    const task =await db.todo.create({
        data:{title,
            description
            
        }
    })

    res.status(201).json({task:task})

}

module.exports.getAllTask =async(req,res)=>{
    const task =await db.todo.findMany() 
    res.status(200).json({task:task})
}

module.exports.getTask=async(req,res)=>{
     const {id} =req.params
    const task =await db.todo.findUnique({
        where:{
            id:+id
        }
    })
    res.status(200).json({task:task})
}


module.exports.getUpdate=async(req,res)=>{
    const{id} =req.params
    const task =await db.todo.update({
        where:{id:+id},
        data:{
            ...req.body,
            isComplete:true
        }
    })
     res.status(200).json({task:task})
}


module.exports.getDelete =async(req,res)=>{
    const {id} =req.params
    const task =await db.todo.delete({
        where:{id:+id}
    })
    res.status(200).json("task has been deleted successfully")
}