const sqr= (num)=>num*num
const double = (num)=> num*2

const compose = (func1,func2) => value => func1(func2(value))

const getSquareAndDouble = compose(double,sqr)

console.log(getSquareAndDouble(5)) // 50

