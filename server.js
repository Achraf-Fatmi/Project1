const express = require ('express');
require('dotenv').config ({path:"./Config/.env"})
const passport = require ('passport')

const connectDB= require ('./Config/connectDB')
const app = express ();
var cors=require ('cors')
app.use (cors())
connectDB()


app.use (express.json())


// passport
app.use(passport.initialize())
require('./Security/passport')(passport)

app.use ('/api', require ('./Routes/User'))

const port = process.env.PORT

app.listen (port, (err)=>
err ? (console.log(err)) : console.log(`server is running on port ${port}`)
);

