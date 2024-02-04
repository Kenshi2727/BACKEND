const twice=x=>x*2;
const square=x=>x*x;

const compose=(fn1,fn2)=>value=>fn1(fn2(value));

console.log(compose(square,twice)(5)); // 100