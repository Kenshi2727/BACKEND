var name="John";
console.log(typeof(name))

name="kenshi"
console.log(name)
console.log(name.toUpperCase())

age=98

// console.log(age.toUpperCase()) not applicable for number

// can use typeof to check the type of variable

if(typeof age==="number"){
    console.log("age is  a number hence cannot be capitalized")  
}
else{
    console.log(age.toUpperCase())
}