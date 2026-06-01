import jwttoken from "jsonwebtoken"
export const authenticateUser=(req,res,next)=>{
    console.log("Auth Middleware")
    try{
         const header=req.headers.authorization
         if(!header){
            return res.send(401).json({success:false,message:"Access Denied"})
         }
        const token =header.split(" ")[1]
        const verifyToken=jwttoken.verify(token,process.env.JWT_SECRET_TOKEN)
        req.user=verifyToken
        next()
    }
    catch(e){
        console.log(e.message)
        return(res.status(401).json({message:"Invalid Token"}))
    }

}