const ProfileModel = require("../models/ProfileModel")
const ValidateProfile= require ('../validation/Profile')



const AddProfile = async (req, res)=>{
    const {errors, isValid}= ValidateProfile(req.body)
try {
    if(!isValid){
        res.status(404).json(errors)
    }else{
        ProfileModel.findOne({user:req.user.id})
    .then (async (profile)=>{
        if(!profile){
            req.body.user= req.user.id
            await ProfileModel.create(req.body)
    res.status(200).json({message: "sucess"}) 
        }else{
            await ProfileModel.findOneAndUpdate(
                {_id: profile._id},
                req.body,
                {new:true}
            ).then(result =>{
                res.status(200).json(result)
            })
        }
    })
    }
    
} catch (error) {
    res.status(404).json(error.message)
}
}

const FindAllProfiles = async (req, res)=>{
    try {
        const data= await ProfileModel.find().populate('user', ["name", "email", "role"])
        res.status(200).json(data)
        
    } catch (error) {
    res.status(404).json(error.message)
    }
    
}

const FindOneProfile = async (req, res)=>{
    try {
        const data= await ProfileModel.findOne({user:req.user.id}).populate('user', ["name", "email", "role"])
        res.status(200).json(data)
        
    } catch (error) {
    res.status(404).json(error.message)
    }
}

const DeleteProfile = async (req, res)=>{
    try {
        const data= await ProfileModel.findOneAndRemove({_id:req.params.id})
        res.status(200).json({message: "user deleted"})
        
    } catch (error) {
    res.status(404).json(error.message)
    }
}

module.exports={
    AddProfile,
    FindAllProfiles,
    FindOneProfile,
    DeleteProfile
}