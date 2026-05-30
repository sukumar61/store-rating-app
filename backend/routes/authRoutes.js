import express from "express"
import { signup } from "../controllers/authController.js" 
import { signupValidater } from "../middleware/validation.js"

const authRouters=express.Router()

authRouters.post("/",signupValidater,signup)
export default authRouters