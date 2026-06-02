import pool from "../config/db.js"

export const adminDashboardController = async (req,res) => {
    try{
        let connection

        connection = await pool.getConnection()

        const totalUsers = await connection.query(
            "SELECT COUNT(*) AS totalUsers FROM users"
        )

        const totalStores = await connection.query(
            "SELECT COUNT(*) AS totalStores FROM stores"
        )

        const totalRatings = await connection.query(
            "SELECT COUNT(*) AS totalRatings FROM ratings"
        )

        return res.status(200).json({
            success:true,
            totalUsers: Number(totalUsers[0].totalUsers),
            totalStores: Number(totalStores[0].totalStores),
            totalRatings: Number(totalRatings[0].totalRatings)
        })
    }
    catch(error){
        console.log(error.message)

        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}