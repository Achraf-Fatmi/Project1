const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const ProfileModel = new Schema ({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    phone: {type: Number}, 
    discord: {type: String},
    currentRank:{type:String},
    highestRank:{type: String},
    description: {type: String},
    rating : {type: Number},
    youtube_channel : {type: String},

})

module.exports = mongoose.model ("Profiles", ProfileModel); 