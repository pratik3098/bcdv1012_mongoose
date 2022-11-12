'use strict'
const model=require("./schema.js")

exports.insert=function(firstName, lastName, age, gender, phone,  callback){
  // Sync query 
   model.create({ firstName, lastName, age, gender, phone}, callback)

}


exports.delete=function(firstName, lastName, age, callback){
    

    model.deleteOne({ firstName, lastName, age}, callback)
}


exports.update=function(firstName, lastName, age, callback){
    model.updateOne({firstName}, {age}, {runValidators: true}, callback)
}


exports.insertAsync=async function(firstName, lastName, age, gender){
    // Async query 
    try{
    const res= await model.create({ firstName, lastName, age, gender})
    return res
  
    }catch(err){
        return new Error(err)
    }
  
}



module.exports.insert('Patricia', 'Lusignan', '129', 'F', {
    phone: "6475551111", areaCode: "+1"
}, function(err,res){

    if(err){
        console.log('Error:', err)
    }else{
        console.log(res)
    }

})


// module.exports.update('Patricia', 'Lusignan', '37', function(err,res){

//     if(err){
//         console.log('Error:', err)
//     }else{
//         console.log(res)
//     }

// })
// module.exports.delete('Alex', 'Brown', '27', function(err,res){

//     if(err){
//         console.log('Error:', err)
//     }else{
//         console.log(res)
//     }

// })




exports.remove=function(firstName, lastName, callback){


}


exports.deletePerson =async function (firstName, lastName){

}



function main(){
    
   module.exports.insertAsync('Mike', 'Warden', '33', 'Z')
   .then((res)=>{
    console.log("======= Hey my .then response =======")
    console.log(res)
    console.log("======================")
   })
   .then((res2)=>{
    console.log("second console")
   }).catch(err=>{
    console.log(err)
   })

   

}

//main()

