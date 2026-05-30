 import pool from "../config/db.js"
 export const getUsers=async (req,res)=>{
    let Connection;
    try{
        const Connection=await pool.getConnection()
        const [result]=await Connection.query("select * from users;")
        res.send(result)
    }
    catch(e){
        console.log(e.message)

    }

    }

