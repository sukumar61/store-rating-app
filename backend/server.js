import express from "express"
import pool from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import authRouter from "./routes/authRoutes.js"
const app=express()
app.use(express.json())
app.listen(3000,()=>{
    console.log("listing request")
})
app.use("/signup",authRouter)
app.use("/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("server working")

})