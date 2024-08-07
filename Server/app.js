const express =require("express")
const app =express()
const route=require("./routes/router")
port =3000
const cors =require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const corsOptions = {
    origin: 'https://newtodowebsite.netlify.app',
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  };
  
app.use(cors(corsOptions));
app.use("/task",route)





app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})