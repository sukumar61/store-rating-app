import express from "express"
import { signup,login } from "../controllers/authController.js" 
import { signupValidater,loginValidater } from "../middleware/validation.js"

const authRouters=express.Router()

authRouters.post("/signup",signupValidater,signup)
authRouters.post("/login",loginValidater,login)
export default authRouters