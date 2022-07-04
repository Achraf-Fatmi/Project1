const express = require ('express');
require('dotenv').config ({path:"./Config/.env"})
const passport = require ('passport')
const path = require ('path')

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

if (process.env.NODE_ENV==='production') {
    app.use(express.static('client/build'));
    app.get ('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT

app.listen (port, (err)=>
err ? (console.log(err)) : console.log(`server is running on port ${port}`)
);

