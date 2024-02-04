// tasks=1
// delayTime=0
// //sync task
// for(var i=0;i<5;i++){
//     console.log("Synchronus task No."+(i+1)+" executed at the "+i+"th iteration")
    
//     //async task
// setTimeout(()=>{
//     console.log("Asynchronus task No."+(tasks++)+" executed")
//     console.log(i)
//     }, delayTime)

// if(i==4)
// console.log(`===========${delayTime/1000}sec wait===============`)
// }

//solutions

//1 change var to let
// for(let i=0;i<5;i++){    
// setTimeout(()=>{
//     console.log(i)
//     }, 1000)

// }

//2 use closure
for(var i=0;i<5;i++){
    (function(i){
        setTimeout(()=>{
            console.log(i)
            }, 1000)
    })(i)
}
