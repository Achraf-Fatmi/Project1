const isEmpty =  require('./isEmpty')
const validator = require ('validator')

module.exports = function ValidateProfile (data){
    let errors = {}


    data.phone = !isEmpty(data.phone) ? data.phone :""
    data.currentRank = !isEmpty(data.currentRank) ? data.currentRank :""
    data.highestRank = !isEmpty(data.highestRank) ? data.highestRank :""
    data.discord = !isEmpty(data.discord) ? data.discord :""
    data.description = !isEmpty(data.description) ? data.description :""


    if (validator.isEmpty(data.phone)){
        errors.phone = "Required phone"
    }

    if (validator.isEmpty(data.currentRank)){
        errors.currentRank = "Required current Rank"
    }

    if (validator.isEmpty(data.highestRank)){
        errors.highestRank = "Required highest Rank"
    }
    if (validator.isEmpty(data.discord)){
        errors.discord = "Required discord"
    }
    if (validator.isEmpty(data.description)){
        errors.description = "Required description"
    }



    return {
        errors, 
        isValid: isEmpty(errors)
    }
}