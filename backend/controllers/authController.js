import { validationResult } from "express-validator"
import pool from "../config/db.js"
export const signup=async(req,res)=>{
    let connection;
    try{
        const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const{name,email,address,password}=req.body
     connection= await pool.getConnection()
   const existingUser = await connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
)

 res.json({Message:existingUser})
    console.log(existingUser)
    
    }
    catch(e){
        console.log(e.message)
    }
    finally {
        if (connection) connection.release()
    }

}
