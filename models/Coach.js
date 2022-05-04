const mongoose = require ('mongoose')

const Schema=  mongoose.Schema

const coachSchema = new Schema ({
    name: {type: String},
    email:{type: String, trim: true, unique: true},
    password: {type: String },
    phone: {type: Number},
    discord: {type: String, unique: true},
    current_rank:{type:String},
    highest_rank:{type: String},
    rating : {type: Number},
    youtube_channel : {type: String ,unique: true},
    description: {type: String},
    role: {type:String}
})

module.exports = mongoose.model ("coach", coachSchema);