const promise=new  Promise(function(resolve,reject){
    if(Math.random() > 0.5){
    resolve('Success');//callback function
    }
    else{
     reject('Failure');  //callback function
}
})
//promise.then(response=>console.log(response))
// promise.catch(error=>console.log(error))

promise.then(response=>console.log(response)).catch(error=>console.log(error))//chaining of promises

promise.finally(()=>console.log('Promise is settled'))//finally is used to execute the code after the promise is settled