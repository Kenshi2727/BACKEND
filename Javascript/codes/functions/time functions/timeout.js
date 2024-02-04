// setTimeout(()=>{
//     console.log("Hello there! This is Kenshi reporting for duty!")
//     }, 3000)  // 3000 milliseconds = 3 seconds
//     // Output: Hello there! This is Kenshi reporting for duty!
//     // The output will be displayed after 3 seconds.

const timeoutId = setTimeout(() => {
    console.log("Hello there! This is Kenshi reporting for duty!")
}, 3000)
clearTimeout(timeoutId) // This will clear the timeout and the output will not be displayed.
console.log("Timeout cleared!") 
