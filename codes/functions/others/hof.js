function calculatorFunction(operation,initialValue,numbers){
    let total = initialValue;
    for(const number of numbers){
        total=operation(total,number);
    }
    return total;
}
function sum(n1,n2){
    return n1+n2;
}

function product(n1,n2){
    return n1*n2;
}

//fuction passed as an argument so it is a higher order function
console.log(calculatorFunction(sum,0,[1,2,3,4,5]));//15 
console.log(calculatorFunction(product,1,[1,2,3,4,5]));//120