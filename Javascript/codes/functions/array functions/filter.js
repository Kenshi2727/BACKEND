const nums=[1,2,3,4,5,6,7,8,9,10];
const newNums=nums.filter((num,index,arr)=>{
return num%2===0;
});
console.log(newNums);
