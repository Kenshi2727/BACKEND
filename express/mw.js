const express = require('express');
const app = express();

//application level middleware
app.use((req, res,next) => {
    res.send("Application Test Message");
    next();
}) 


//log the time of the request
const m1=function(req,res,next){
    console.log("Request Time:",Date.now());
    next();
}

//log the time after the response
const m2=function(req,res,next){
    console.log("Response Time:",Date.now());
    next();
}

app.use("/hello",m1); 

//route level middleware
app.get("/hello", (req, res,next) => {
    res.send("Test Message");
    next();
})   


app.use("/hello",m2);



//starting the server
app.listen(3000, () => {
    console.log('Server started')
})