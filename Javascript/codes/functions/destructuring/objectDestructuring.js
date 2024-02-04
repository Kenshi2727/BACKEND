name='Kenshi'
const obj={
    name:'John',
    surname:'Smith'
}
const {name:firstName/*aliasing */,middle='',surname}=obj;//can also give default value

console.log(name,middle,surname);//Kenshi  Smith
 console.log(firstName,middle,surname);//John  Smih