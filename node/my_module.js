let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let prod=(a,b)=>a*b;
let div=(a,b)=>a/b;

module.exports = {
    add:add,
    sub:sub,
    prod:prod,
    div:div
}
// Now, you can use the module in another file using require('./my_module.js') and access the functions using the object returned by the require function.
