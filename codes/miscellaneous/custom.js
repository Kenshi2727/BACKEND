const forEach = (cb,arr)=>{
for(let item of arr){
    cb(item);
}
}
const callback=(item)=>{
    console.log(item);
}

const arr=[1,2,3,4,5,6,7,8,9,10];
forEach(callback,arr); // 1 2 3 4 5 6 7 8 9 10