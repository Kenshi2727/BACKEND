//logic to create user collection
//logic to define schema for user collection

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    age: {
        type: Number,
       
    }
})

module.exports=mongoose.model('User', userSchema);