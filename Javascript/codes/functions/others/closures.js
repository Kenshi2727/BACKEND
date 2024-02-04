function outer(){
    var num2=20;
    return function(num1){  //anonymous function
        return num1+num2;
    }
}

const closure = outer(); //returns a function
console.log(closure(10)); //30


