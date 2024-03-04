//logic to create user collection
//logic to define schema for user collection

const mongoose = require('mongoose');


// const addressSchema=new mongoose.Schema({
//     lane1:String,
//     lane2:String,
//     street:String,
//     city:String,
//     pincode:Number,
//     country:String,
//     continent:String

// })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
       
    },
    age: {
        type: Number,
        min:18
},
email:{
    type:String,
    required:true,
    lowercase:true,
    minLength:11,
    },
    subjects : [String], //array of strings(subjects)
 
    // address:addressSchema  //complex object
    address:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:"Address"
    }

},{timestamps:true,versionKey:false})  //versionKey is used to remove the version key from the collection
                       //by default it is true, so we have to set it to false to remove it

module.exports=mongoose.model('User', userSchema);