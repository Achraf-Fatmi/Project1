
const userSchema = require ('../models/User.js');
const ValidateRegister = require ('../validation/Register.js')
const ValidateLogin=require ('../validation/Login.js')
const jwt= require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const userRegister = async (req, res)=>{
    const {errors, isValid}= ValidateRegister(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors)
            
        } else {
            userSchema.findOne({email: req.body.email})
            .then (async (exist)=>{
                if(exist){
                    errors.email="user exists"
                    res.status (404).json(errors)
                }else{
                req.body.role = "USER"
                const hash =  bcrypt.hashSync(req.body.password, 10)
                req.body.password = hash;
                await userSchema.create(req.body)
            res.status(200).json ({message : "user created"})
                }
            })
      
        }
      

    } catch (error) {
        console.log(error);
        res.status(404).json(error.message)
    }
}

const Login = async (req, res)=>{
    const {errors, isValid}= ValidateLogin(req.body)
try {
    if (!isValid) {
        res.status(404).json(errors)
    } else {
        userSchema.findOne({email: req.body.email})
        .then (user=>{
            if(!user){
                errors.email="user not found"
                res.status(404).json(errors)
            }else{
                bcrypt.compare(req.body.password, user.password)
                .then(isMatch=>{
                    if (!isMatch) {
                        errors.password="incorrect password"
                        res.status(404).json(errors)
                        
                    } else {
                        var token = jwt.sign({ 
                            id:user._id,
                            name: user.name,
                            email:user.email,
                            role: user.role
                         }, process.env.PRIVATE_KEY, { expiresIn:'24h'});
                        res.status(200).json({
                            message:"success",
                            token: token
                        })
                    }
                })
            }
        })
        
    }
   
} catch (error) {
    res.status(404).json(error.message)
}
}


const Test=(req, res)=>{
 res.send ("User")
}

const Admin=(req, res)=>{
    res.send ('Admin')
   }

const Coach=(req, res)=>{
    res.send ('Coach')
   }
   

module.exports = {
    userRegister,
    Login,
    Test,
    Admin,
    Coach
}