'use strict'
const constants=require("./constants.js")
exports.isFirstName=function(str){
    
    return Boolean(str.length <=15 && !str.includes("@"))
}


exports.isLastName=function(str){
    
    return Boolean(str.length <=20 && !str.includes("@"))
}



exports.isValidAge=function(age){
    age=Number(age)
    return (0<=age && age <=120)
}


exports.isValidGender=function(v){
    return constants.genders.includes(v)
}