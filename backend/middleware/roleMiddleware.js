export const authorizeRoles=(...roles)=>{
    return(req,res,next)=>{
        const user=req.user
        if(!roles.includes(user.role)){
            res.status(403).json({success:false,message:"Access forbidden"})
        }
    next()

    }
}