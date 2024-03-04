const mongoose=require('mongoose')
const user_model=require('./models/user.model')
const address_model=require('./models/address.model')
//connnection to the database


//event driven

mongoose.connect('mongodb://localhost/mongo_db')
const db=mongoose.connection

//open the connection
db.once('open',()=>{
    console.log('connected to the database!')

    //insert some documents
     init()
    //queries to the database
    //dbQueries();
})

//error in the connection
db.on('error',()=>{
    console.error('error in the connection!!!')
})

async function init(){
// logic to insert documents in the user collection

address={
    lane1:'beluga lane',
    lane2:'hicky lane',
    street:'doggy street',
    city:'Poison City',
    pincode:224567,
    country:'Mongolian Plateau',
    continent:'The 8th Continent'

}
const address_obj=await address_model.create(address)

const user_obj={
    name:'kushagra2',
    age:28,
    email:'motulala@gmail.com',
    subjects:['English','Hindi'],
    // address:{
    //     lane1:'beluga lane',
    //     lane2:'hicky lane',
    //     street:'doggy street',
    //     city:'Poison City',
    //     pincode:224567,
    //     country:'Mongolian Plateau',
    //     continent:'The 8th Continent'
    
    // }

    address:address_obj._id //referencing
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


async function dbQueries(){
   //reading/fetching the data from the database
//    const user=await user_model.findById('65e33193282e673742c2ea50')

// try{
// const users=await user_model.find({name:'Kenshi'})
//    console.log(users)
// }
// try{
//     const user=await user_model.findOne({name:'Kenshi'})
//        console.log(user)

//        user.hobby="Playing guitar to impress some girl"//new field added
//        user.email="kenshinmasterkyushu@fukmail.com"
//        const user_updated=await user.save() //updating our data
//     }

//using where clause
// try{
//     const users=await user_model.where('age').gte(20).lte(30)
//        console.log(users)
    
// }
// catch(err){
//     // console.error("Error while reading the data"+err)
//     console.error("Error while updating the data"+err)
// }



//deleting a document

const userRec= await user_model.deleteOne({name:"kushagra"})
console.log(userRec)
const users=await user_model.find({name:"kushagra"})
console.log(users)
}



