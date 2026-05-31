import express from "express"
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import authRouters from "./routes/authRoutes.js"
import {authenticateUser} from "./middleware/authMiddleware.js"
const app=express()
app.use(express.json())
app.listen(3000,()=>{
    console.log("listing request")
})
app.post("/profile",authenticateUser,(req,res)=>{
    res.json({message:req.user})
})
app.use("/auth",authRouters)
app.use("/users",userRoutes)

