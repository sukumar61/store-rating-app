import express from "express"
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
const app=express()
app.listen(3000,()=>{
    console.log("listing request")
})
app.use("/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("server working")

})