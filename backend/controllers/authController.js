import { validationResult } from "express-validator"
import bcrypt from "bcrypt"
import pool from "../config/db.js"
import jwttoken from "jsonwebtoken"
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

if(existingUser.length>0){
    return res.status(400).json({message:"User already exist"})
}
const hashed_password=await bcrypt.hash(password,10)
await connection.query(`insert into users(name, email, password, address, role)
     values(?,?,?,?,?);`,[name,email,hashed_password,address,"USER"])

 res.status(201).json({success:true,Message:"User registered successfully"})
    console.log(existingUser)
    
    }
    catch(e){
        console.log(e.message)
    }
    finally {
        if (connection) connection.release()
    }

}

export const login=async(req,res)=>{
    let connection
    try{
        const errors=validationResult(req)
        if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {email,password}=req.body
    connection=await pool.getConnection()

    const findingTheUserExistence=await connection.query("select * from users where email=?",[email])
    if(findingTheUserExistence.length===0){
        return res.status(401).json({success:false,message:"User not found"})
    }

    const is_password_matching=await bcrypt.compare(password,findingTheUserExistence[0].password)
    if(is_password_matching){
        const payload={
            id:findingTheUserExistence[0].id,
             email:findingTheUserExistence[0].email,
              role:findingTheUserExistence[0].role,
        }
        const token=jwttoken.sign(payload,process.env.JWT_SECRET_TOKEN,{expiresIn:"2d"})

        return res.status(200).json({success:true,message:"User login Successfull",token})
    }
    else{
        return res.status(401).json({success:false,message:"Invalid email or password"})
    }
    }

    catch(e){
        console.log(e.Message)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
    finally {
        if (connection) connection.release()
    }

}