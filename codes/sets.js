const setDemo=new Set();
setDemo.add(1);
setDemo.add(2);
setDemo.add(3);
setDemo.add(3); // duplicate value will not be added
console.log(setDemo);
console.log(setDemo.size);// size of set
setDemo.delete(2); // delete element from set
console.log(setDemo);

// setDemo.clear(); // clear all elements from set

// console.log(setDemo);

console.log(setDemo.entries());

console.log(setDemo.has(1)); // check if element is present in set

console.log(setDemo.values()); // returns all values of set
console.log(setDemo.keys()); // returns all keys of set
