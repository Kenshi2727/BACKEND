const fetchData=(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5)
                resolve("data")
            else
            reject(new Error("custom Error"))
        },1000)
    })
}    

fetchData("https://jsonplaceholder.typicode.com/posts").then((res)=>console.log(res)).catch((err)=>console.log(err))