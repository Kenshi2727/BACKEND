const promise1 = Promise.resolve('first');
const promise2 = Promise.reject('second');
promise1.then(response=>console.log(response))
promise2.catch(error=>console.log(error));
