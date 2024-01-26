// const emp={
//     name:"John",
//     age:30,
//     salary:25000,
//     address:{
//         city:"Hyderabad",
//         state:"Telangana",
//         pincode:500001
//     },
//     hobbies:["reading","playing","coding"]

// }

// // console.log(Object.keys(emp))//returns list of keys
// // console.log(Object.values(emp))//returns list of values
// // console.log(Object.entries(emp))//returns list of key value pairs

// emp_new=Object.assign({},emp,{'1':"Kenshi"})//returns a new object
// console.log(emp_new)

const person={
    name:"John",
    age:30,
    salary:25000,
}

Object.freeze(person)//freezes the object
// person.name="Kenshi"
// delete person.age
// console.log(person)//no cahnge happened!

// Object.seal(person)//seals the object
// person.name="Kenshi"
// person.hobbies=["reading","playing","coding"] //allowed
// delete person.age //not allowed
// console.log(person)//name changed

// console.log(Object.hasOwn("name"))//returns true if the object has the property

// console.log(Object.getOwnPropertyNames(person))//returns all the properties of the object
// console.log(Object.getOwnPropertyDescriptors(person))//returns all the symbols of the object


//iterate over keys
 for(let key in person){
     console.log(key)
 }

//  Object.defineProperties(person,{
//         name:{
//             value:"Kenshi",
//             writable:false
//     }}) //defines a new property
