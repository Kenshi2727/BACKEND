//block of code that can be reused is called a function
// console.log("hi")
// console.log("Welcome to the 7 PM class")
// console.log("Keep learning")
//will have to write this code multiple times

function greet_students(){
    console.log("hi")
    console.log("Welcome to the 7 PM class")
    console.log("Keep learning") 
}


greet_students()//function calling


//function to add two  umbers
function sum(a,b){
    console.log("inside function body")
    return a+b
}

console.log(sum(2,3))//printing result returned by function
