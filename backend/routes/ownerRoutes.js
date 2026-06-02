import express from "express"
import { authenticateUser } from "../middleware/authMiddleware.js"
import{authorizeRoles} from "../middleware/roleMiddleware.js"
import { ownerController } from "../controllers/ownerController.js"


const ownerRoute=express.Router()
ownerRoute.get("/dashboard",authenticateUser,ownerController)
export default ownerRoute