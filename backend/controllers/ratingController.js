import { json } from "express";
import pool from "../config/db.js";
export const ratingController=async (req,res)=>{
    try{
        let connection;
     const {store_id,rating}=req.body
    const user_id=req.user.id
    connection=await pool.getConnection()
    const result=await connection.query("select * from ratings where store_id=? and user_id=?;",[store_id,user_id]);
    if(result.length>0){
        return res.status(400).json({"success": false,
  "message": "Rating already submitted"})
    }else{

    const finalresult=await connection.query("insert into ratings(user_id,store_id,rating) values(?,?,?);",[user_id,store_id,rating]);
    return res.status(200).json({success:true, message:"Rating Controller Working"})
        console.log(finalresult)
    }

    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }

}
export const changeRating=async (req,res)=>{
    try{
        let connection;
        const {id}=req.params
     const {rating}=req.body
    const user_id=req.user.id
    connection=await pool.getConnection()
    const result=await connection.query("select * from ratings where store_id=? and user_id=?;",[id,user_id]);
    if(result.length===0){
        return res.status(400).json({success:false,message:"No rating found"})
    }
    connection.query("update ratings set rating=? where store_id=? and user_id=?;",[rating,id,user_id])
    return res.status(201).json({success:true,message:"rating successfully updated"})
    }

    catch(err){
        console.log(err.message)
        res.status(500).json({success:false,message:"Internal Server Error"})
    }

}