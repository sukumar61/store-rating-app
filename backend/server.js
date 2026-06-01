import express from "express"
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import authRouters from "./routes/authRoutes.js"
import {authenticateUser} from "./middleware/authMiddleware.js"
import{authorizeRoles} from "./middleware/roleMiddleware.js"
const app=express()
app.use(express.json())
app.listen(3000,()=>{
    console.log("listing request")
})
app.post("/profile",authenticateUser,authorizeRoles("ADMIN"),(req,res)=>{
    res.json({success: true,message: "Welcome Admin"})
})


app.use("/auth",authRouters)
app.use("/users",userRoutes)

