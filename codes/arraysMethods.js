//learn about array methods in js
arr=[1,2,3,4,5,6]
console.log(arr)
console.log(arr.pop()) //removes last element and returns it
console.log(arr)

console.log(arr.push(7)) //adds element at last and returns length of array

console.log(arr) //adds 7 at last

console.log(arr.shift()) //removes first element and returns it 
console.log(arr)

console.log(arr.unshift(0)) //adds element at first and returns length of array
console.log(arr) 


console.log(arr.concat([8,9,10])) //concatenates two arrays and returns new array

console.log(arr) //original array remains same

let fruits=["apple","banana","mango","orange","grapes"]
console.log(fruits)

result=fruits.join(" and ") //joins all elements of array with given string
console.log(result)

console.log(typeof result) //returns string

//slicing
let arr2=[5,7,1,2,3,4,5,6,7,8,9,10]
console.log(arr2.slice(2,5)) //returns new array with elements from index 2 to 4
console.log(arr2.slice()) //returns new array with all elements
console.log(arr2.slice(2)) //returns new array with elements from index 2 to last

console.log(arr2.slice(-5,-2)) //returns new array with elements from index -5 to -3

//splice
arr3=[1,2,3,4,5,6,7,8,9,10]
console.log(arr3.splice(2,3)) //removes 3 elements from index 2 and returns them
console.log(arr3) //original array is modified

console.log(arr3.splice(2,0,3,4,5)) //adds 3,4,5 at index 2 and returns empty array
console.log(arr3) //original array is modified 

arr3.reverse() //reverses the array
console.log(arr3)

arr3.sort() //sorts the array
console.log(arr3)


arr4=[1,2,5,7,33,4422,23113,3,4,5,6,7,-98,8,9,10]
arr4.sort((a,b)=>b-a) //sorts the array in descending order
console.log(arr4)

arr.toString() //converts array to string
console.log(arr)

arr5=[1,2,3,4,5,6,[7,8,9,10]]
console.log(arr5)
console.log(arr5.flat()) //flattens the array
str="haha"
console.log(Array.isArray(arr5)) //checks if given object is array or not
console.log(Array.isArray(str)) //returns false 
