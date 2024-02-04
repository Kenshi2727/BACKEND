// const nums=[1,2,3];
// const [one,,three]=nums;//destructuring
// console.log(one,three);//1 3

// const name='abc'
// const [char1,char2,char3]=name;
// console.log(char1,char2,char3);//a b c

//assignable
// const name='Kenshi Liu'
// const person={};
// [person.firstName,person.lastName]=name.split(' ');

// console.log(person);

//swapping
let firstName='Kenshi';
let lastName='Liu';
[lastName,firstName]=[firstName,lastName];

console.log(firstName,lastName);//Liu Kenshi
