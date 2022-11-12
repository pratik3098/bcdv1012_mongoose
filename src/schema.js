'use strict'
const mongoose=require('mongoose')
const validators=require("./validators.js")
const constants=require("./constants.js")
const moment=require('moment')
const connection = mongoose.createConnection('mongodb+srv://gbcmongodb:45shw5Ztep408TQs@cluster0.g20hxkw.mongodb.net/test',
{useNewUrlParser: true, useUnifiedTopology: true})



const phoneSchema =mongoose.Schema({
   phone: {
    type: String, 
   },

   areaCode: {
    type: String
   }
})




const schema=mongoose.Schema({
    //  __id: {
    //     default: mongoose.Types.ObjectId,
    //  },
    firstName: {
        type: String, 
        sparse: true, //""
        trim: true, //"   pratik \n"  --> "pratik"
        required: [true, 'firstName required'],
        immutable: true,  // The firstName cannot be changed even with the update queries
        validate: [validators.isFirstName, 'invalid first Name']  
    },


    lastName:{
        type: String, 
        sparse: true, //""
        trim: true, //"   pratik \n"  --> "pratik"
        required: [true, 'lastName required'],
        immutable: true,  // The firstName cannot be changed even with the update queries
        validate: [validators.isLastName, 'invalid last Name']  
    },
    age: {
        type: Number,
        validate: [validators.isValidAge, 'invalid Age'],
        required: true,
        immutable: true
  
    },
    
    gender: {
        enum:  constants.genders, //["M", "F", "O"]
        validate: [validators.isValidGender, 'invalid gender']
       // required: true
    },


    phone: {
        type: phoneSchema
    },

    timestamp: {
        type: Date,
        default: Date.now(), 
        immutable: true,
        get: function(v){
            return moment(v).format('YYYY-MM-DDTHH:mm:ss')
        }
       
    }
},{ toObject: { getters: true, setters: true },
    toJSON: { getters: true, setters: true } 
})


module.exports=connection.model('Person' , schema)

