// const hello_func= function hello(){  //"hello" name is optional can use ()only ;such functions are called anonymous function
//     console.log("Hello baby")
// }

// hello_func()
// // hello() can't be used


// function operate(a,b,fn/**type function */){
//     console.log(fn(a,b))
// }

// function sum2(a,b){
//     return a+b
// }
// operate(5,6,sum2)


function return_greet_fn(){
    return function(){
        console.log("Hello putin")
    }
}

return_greet_fn()()