
const  coachSchema= require ('../models/Coach');

const coachRegister = async (req, res)=>{
    try {
      
       await coachSchema.create(req.body)
       res.status(200).json ({message : "coach created"})

    } catch (error) {
        console.log(error);
        res.status (404).send({message : "An error has occured"})
    }
}

module.exports = {
    coachRegister
}