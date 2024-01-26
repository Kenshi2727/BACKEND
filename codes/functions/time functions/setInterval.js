let count=1


timer=setInterval(()=>{
console.log(count++)
if(count==100)
clearInterval(timer)
}, 1000)