let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let mul=(a,b)=>a*b;
let div=(a,b)=>a/b;
let mod=(a,b)=>a%b;

exports.message=()=>console.log("Kenshi is coding")

module.exports={
    add:add,
    sub:sub,
    mul:mul,
    div:div,
    mod:mod
}

