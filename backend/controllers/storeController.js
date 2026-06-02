import e from "express";
import pool from "../config/db.js"
export const createStore=async (req,res)=>{
    console.log("Controller Started")
    try{
        let connection;

        const {name,email,address,owner_id}=req.body
        connection=await pool.getConnection()
        const emailExistance=await connection.query("select * from stores where email=?",[email])
        console.log(emailExistance)
        if(emailExistance.length>0){
            return res.status(400).json({success:false,message:"Store already exist"})
        }
        const result=await connection.query("insert into stores(name,email,address,owner_id) values(?,?,?,?)",[name,email,address,owner_id])
        
        if (result.affectedRows===0){
         return res.status(400).json({
        success:false,
         message:"Store creation failed"
        })
        }
        return res.status(201).json({success:true,message:"Store created successfully",store_id:Number(result.insertId)})

    }
    catch(error){
        console.log(error.message)
    }

}

export const getStores=async (req,res)=>{
    try{
        let connection;
    connection=await pool.getConnection();
    const store_details=await connection.query(`
            SELECT
                s.id,
                s.name,
                s.email,
                s.address,
                ROUND(AVG(r.rating),1) AS average_rating
            FROM stores s
            LEFT JOIN ratings r
            ON s.id = r.store_id
            GROUP BY s.id,s.name,s.email,s.address
        ;`)
    return res.status(200).json({store_details})
    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }

}
export const getIndividualStore=async(req,res)=>{
    try{
        let connection;
        const {id}=req.params
    connection=await pool.getConnection();
    const individual_store_details=await connection.query("select * from stores where id=?;",[id])
    return res.status(200).json({individual_store_details})

    }catch(err){
        console.log(err.message)
        return res.status(500).json({success:false,message:"Internal Server Error"})

    }
    

}