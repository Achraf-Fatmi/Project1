const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {type: String},
    email:{type: String, trim: true, unique: true},
    password: {type: String },
    role: {type:String}
})

module.exports = mongoose.model ("users", userSchema); 