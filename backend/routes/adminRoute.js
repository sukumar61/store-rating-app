import express from "express"
import { authenticateUser } from "../middleware/authMiddleware.js"
import{authorizeRoles} from "../middleware/roleMiddleware.js"
import { adminDashboardController } from "../controllers/adminDashboardController.js"

const adminRoute=express.Router()
adminRoute.get("/dashboard",authenticateUser,authorizeRoles("ADMIN"),adminDashboardController)
export default adminRoute