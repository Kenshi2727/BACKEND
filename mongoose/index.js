const mongoose=require('mongoose')
const user_model=require('./models/user.model')
//connnection to the database


//event driven

mongoose.connect('mongodb://localhost/mongo_db')
const db=mongoose.connection

//open the connection
db.once('open',()=>{
    console.log('connected to the database!')

    //insert some documents
    init()
})

//error in the connection
db.on('error',()=>{
    console.error('error in the connection!!!')
})

async function init(){
// logic to insert documents in the user collection
const user_obj={
    name:'Kenshi',
    age:21
}
//inserting the document
try{
const user=await user_model.create(user_obj)
console.log("User created successfully"+user)
}
catch(err){
    console.error("Error while inserting"+err)
}
}