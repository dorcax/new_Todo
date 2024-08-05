const express =require("express")
const app =express()
const route=require("./routes/router")
port =3000
const cors =require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use("/task",route)




app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})