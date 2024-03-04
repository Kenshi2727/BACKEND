const mongoose=require('mongoose')
const addressSchema= new mongoose.Schema({
    lane1:String,
    lane2:String,
    street:String,
    city:String,
    pincode:Number,
    country:String,
    continent:String

})

module.exports=mongoose.model("Address",addressSchema)