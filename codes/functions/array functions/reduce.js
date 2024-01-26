const nums=[1,2,3,4,5,6,7,8,9,10];
// const sumofarray=nums.reduce((sum,num,index,arr)=>{
//     sum += num
//     return sum;
// },0);

const sumofarray=nums.reduce((sum,num,index,arr)=> sum += num);

console.log(sumofarray);