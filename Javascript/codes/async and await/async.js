async function f(){
 const promise = new Promise(function(resolve)  {
    setTimeout(()=> {
      resolve('done!');
    }, 1000);   
})

const data=await promise
console.log(data)
}

f()//funcyion call