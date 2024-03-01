
const mongoose=require('mongoose')
const inputSchema = new mongoose.Schema({
    operation:String,
    input1:Number,
    input2:Number,
    result:Number,
})

module.exports = mongoose.model('arithmetic',inputSchema)


