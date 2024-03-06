const express=require('express')
const app=express()

//GET 127.0.0.1:8080/api/v1/students/123
app.get('/api/v1/students/:id',(req,res)=>{
//  console.log(req.params)
let std_id=req.params.id
let std_obj=students[std_id]

if(std_obj){
    res.status(200).send(std_obj)
}else{
    res.status(500).send({
        err:'Student not found'
    })
    }
})

//GET 127.0.001:8080/api/v1/students?id=1 //query parameter
app.get('/api/v1/students',(req,res)=>{
    let std_id=req.query.id
    let std_obj=students[std_id]
    if(std_obj){
        res.status(200).send(std_obj)
    }else{
        res.status(500).send({
            err:'Student not found'
        })
    }
})


/*POST 127.0.0.1:8080/api/v1/students
{
    'id':4,
    "name":"John",
    "age":20,
    "subject":"Maths"
}
*/

app.use(express.json()) //middleware to read the request body in js object format
app.post('/api/v1/students',(req,res)=>{
    //I need to read the request body
    console.log("Calling inside the post route")
    console.log(req.body)

    students[req.body.id]=req.body
    res.status(200).send(students[req.body.id])
})

//dummy data
const students={
    1:{
        name:'John',
        age:20,
        subject:'Maths',
        id:1
    },
    2:{
        name:'Doe',
        age:21,
        subject:'Science',
        id:2
    },
    3:{
        name:'Senorita',
        age:28,
        subject:'Statistics',
        id:3
    }
}

//start server
app.listen(8080,()=>{
    console.log('server started successfully on port 8080')
})