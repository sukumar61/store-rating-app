import pool from "../config/db.js"
export const ownerController=async (req,res)=>{
    try{
        let connection;
        const ownerId = req.user.id

        connection = await pool.getConnection()
        const store = await connection.query(
            "SELECT * FROM stores WHERE owner_id = ?",
            [ownerId]
        )

        if (store.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No store found for this owner"
            })
        }

        const storeId = store[0].id

        const averageRating = await connection.query(
            `SELECT ROUND(AVG(rating),1) AS averageRating
             FROM ratings
             WHERE store_id = ?`,
            [storeId]
        )
         const users = await connection.query(
            `SELECT
                u.id,
                u.name,
                u.email,
                r.rating
             FROM ratings r
             JOIN users u
             ON r.user_id = u.id
             WHERE r.store_id = ?`,
            [storeId]
        )

        return res.status(200).json({
            success: true,
            storeName: store[0].name,
            averageRating: averageRating[0].averageRating || 0,
            users
        })
    }
    catch(err){
        console.log(err.message)
        return res.statu(500).jason({success:false,message:"Internal Server Error"})
    }

}