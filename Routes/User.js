const express = require ('express');
const passport =require('passport');
const { AddProfile, FindAllProfiles, FindOneProfile, DeleteProfile } = require('../Controllers/profileControllers');


const {userRegister, Login, Test, Admin, Coach} = require ('../Controllers/userController');
const { isRole, Roles } = require('../Security/RoleMiddleware');

const router = express.Router();

// router.post('/register', (req, res)=>{
//     res.send ("welcome")
// })

router.post ('/userregister', userRegister);
router.post ('/loginuser', Login);

// profile route
router.post('/profiles',passport.authenticate('jwt', { session: false }), AddProfile);

router.get('/profiles',passport.authenticate('jwt', { session: false }), FindAllProfiles);

router.get('/profile',passport.authenticate('jwt', { session: false }), FindOneProfile);

router.delete('/profiles/:id',passport.authenticate('jwt', { session: false }),
isRole(Roles.ADMIN),
DeleteProfile);


module.exports = router