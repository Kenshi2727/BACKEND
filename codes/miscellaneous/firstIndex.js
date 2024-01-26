const firstIndex=(callback,nums)=>{
    let index=-1;
    for(let i=0;i<nums.length;i++){
        if(callback(nums[i])){
            index=i
            break;
        }
    }
    return index;
}

const arr=[1,2,3,4,5,6,7,8,9,10];

const condition = (num)=>num>11;

console.log(firstIndex(condition,arr)) // 5