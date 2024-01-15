const express=require('express')
const app=express()
const bookRoute=require("./routes/bookRoutes")
const cors=require('cors')
require('dotenv').config();
require('./connection/mongo')
app.use(cors())
app.use(express.json())
app.use("/api/v1",bookRoute)
app.get("/",(req,res)=>{res.send("Hello")})
app.listen(1000,()=>{console.log("Server Started")})