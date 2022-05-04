const Roles= {
    "ADMIN":"ADMIN",
    "USER":"USER",
    "COACH":"COACH"
}

const isRole = (...roles)=>(req,res,next)=>{
    const role=  roles.find(role=>req.user.role===role)
    if(!role){
        return res.status (401).json({message : "No Access"})
    }
    next ()
}

module.exports={
    isRole,
    Roles
}