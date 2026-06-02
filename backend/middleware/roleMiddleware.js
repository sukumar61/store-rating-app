export const authorizeRoles=(...roles)=>{
    console.log("Role Middleware")
    return(req,res,next)=>{
        const user=req.user
        if(!roles.includes(user.role)){
            return res.status(403).json({success:false,message:"Access forbidden"})
        }
    next()

    }
}
