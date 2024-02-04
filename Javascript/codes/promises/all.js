const promise1 = new Promise(function(resolve){
    resolve('first');
    
}) ;
const promise2 = new Promise(function(resolve,reject){
    reject('second');
    
}) ;
const promise3 = new Promise(function(resolve){
    resolve('third');
    
}) ;
const allPromises = [promise1,promise2,promise3];

Promise.all(allPromises).then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
})//only if all the promises are resolved then only the response will be printed otherwise error will be printed