import express from "express"

import { authenticateUser } from "../middleware/authMiddleware.js"
import{authorizeRoles} from "../middleware/roleMiddleware.js"

import { createStore ,getStores,getIndividualStore} from "../controllers/storeController.js"
console.log("Store Router Loaded")
const storeRouter=express.Router()
        storeRouter.post("/",authenticateUser,authorizeRoles("ADMIN"),createStore)
        storeRouter.get("/",authenticateUser,getStores)
        storeRouter.get("/:id",authenticateUser,getIndividualStore)

export default storeRouter