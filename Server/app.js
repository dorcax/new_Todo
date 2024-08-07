const express =require("express")
const app =express()
const route=require("./routes/router")
port =3000
const cors =require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Configure CORS
const corsOptions = {
    origin: 'https://newtodowebsite.netlify.app', // Update with your Netlify URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
app.use(cors(corsOptions));
app.use("/task",route)





app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})