const fetchData=(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5)
                resolve(`data:${url}`)
            else
            reject(new Error(`custom Error:${url}`))
        },1000)
    })
}    

Promise.all([fetchData("url1"),fetchData("url2")]).then((res)=>console.log(res)).catch((err)=>console.log(err))
