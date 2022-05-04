const express = require ('express');


const {coachRegister} = require ('../Controllers/coachController.js');

const router = express.Router();

// router.post('/register', (req, res)=>{
//     res.send ("welcome")
// })

router.post ('/coachregister', coachRegister);

module.exports = router