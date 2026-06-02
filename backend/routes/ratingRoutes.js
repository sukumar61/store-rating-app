import express from "express"
import { authenticateUser } from "../middleware/authMiddleware.js"
import{authorizeRoles} from "../middleware/roleMiddleware.js"
import {ratingController,changeRating} from "../controllers/ratingController.js"
const ratingRoutes=express.Router()
ratingRoutes.post("/",authenticateUser,authorizeRoles("USER"),ratingController)
ratingRoutes.put("/:id",authenticateUser,authorizeRoles("USER"),changeRating)
export default ratingRoutes