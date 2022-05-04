const mongoose = require ('mongoose');
require ('dotenv').config ({path: './.env'})
const  URI = process.env.DB_URI;

const connectDB = async () =>  {
    try {
        let result = await mongoose.connect(URI)
        console.log("DataBase Connected")
    } catch (error) {
        console.log(`cannot connect to DataBase ${error}`)
    }
}


module.exports= connectDB