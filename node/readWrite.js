const fs=require('fs');
//reading file

//sunc way
// console.log('Before read code')
// const content=fs.readFileSync('input.txt');
// console.log(""+content);
// console.log('After read code')

//async way
// console.log('Before read code')

// fs.readFile('input.txt',(err,content)=>{
//     if(err){
//         return console.log('Error:',err)
//     }
//     console.log(''+content)
// })

// console.log('After read code')

//writing file

//sync way
// console.log('Before write code')

// fs.writeFileSync('output.txt','Hello Kenshi!May god bless you and curse Controller Kid!')

// console.log('After write code')

//async way
console.log('Before write code')

fs.writeFile('output.txt','Hello God thanks for cursing Controller Kid!',err=>{
    if(err){
        return console.log('Error:',err)
    }
    else{
        console.log('File written successfully')
    }
})

console.log('After write code')