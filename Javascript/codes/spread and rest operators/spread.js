// const nums1=[1,2,3]
// const nums=[4,5,6]
// // const spreadNums=[...nums,4,5,6]
// const  spreadNums=[...nums1,...nums]

// console.log(spreadNums) // [1,2,3,4,5,6]

// const nums=[1,2,3]

// const sum=(a,b,c)=>{
//     console.log(a+b+c)
// }

// sum(...nums) // 6


// let obj1={
//     name:"john",
//     age:22
// }

// let obj2={
//     name:"bob",
//     job:"developer"
// }

// const obj={...obj1,...obj2}//name printed is bob because obj2 is written after obj1
// console.log(obj) // {name: "bob", age: 22, job: "developer"}

const nums=[1,2,3]
console.log(Math.max(...nums))