const promise=new  Promise(function(resolve,reject){
    if(Math.random() > 0.5){
    resolve('Success');//callback function
    }
    else{
     reject('Failure');  //callback function
}
})

console.log(promise);