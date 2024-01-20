// const admin={
//     name:"Kenshi",
//     age:21,
//     wish:function(){
//     console.log("13th jan 'happy birthday!!!'")
// }
// }

// console.log(admin)

// const ad={
//     1:"Kenshi",
//     2:21,
//     3:"13th jan 'happy birthday!!!'"
// }
// console.log(ad) //js internally conerts it into string(keys)


// //object creation through functions

// function emp(id,name,salary){
//     this.id=id
//     this.name=name
//     this.salary=salary
// }

// const emp_obj=new emp(1,"Kenshi",70000)
// console.log(emp_obj)


//manipulating object
// const student={
//     name:"Kenshi",
//     age:21
//     address:{
//         city:"Lucknow",
//         pincode:226022
//     }
// }
// console.log(student)
// console.log(student.name)//reading name
// console.log(student["name"])//reaading name
// console.log(student["name"])





const person={}

person.name="Kenshi"
person.age=21
person.address={
    city:"Lucknow",
    pincode:226022
}

console.log(person)

delete person.age
console.log(person)

delete person//deleting object
console.log(person)