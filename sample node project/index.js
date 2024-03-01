const schema=require('./models/inputSchema')
const obj=require('./modules/arithmetics')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/sample_db')
const db=mongoose.connection

db.once("open",()=>{
    console.log("Connection successful")
    //inserting documments
   insert()
})
db.on("error",()=>console.log("Connection Error!!!!!!"))


async function insert(){
    try{
  res1= await  schema.create({operation:"add",input1:10,input2:20,result:obj.add(10,20)})
  res2= await  schema.create({operation:"sub",input1:10,input2:20,result:obj.sub(10,20)})
  res3= await  schema.create({operation:"mul",input1:10,input2:20,result:obj.mul(10,20)})
  res4= await  schema.create({operation:"div",input1:10,input2:20,result:obj.div(10,20)})
  res5= await  schema.create({operation:"mod",input1:10,input2:20,result:obj.mod(10,20)})
  console.log("Documents inserted successfully:"+res1+" "+res2+" "+res3+" "+" "+res4+" "+res5)   
}
catch(err){
    console.log("Error while inserting certain documents"+err)
}
}