function fact(n){
    t=n-1
    p=n
    while(t!=0){
    p*=t
    t--
    }
    return p
}
// console.log(fact(999)) returns Infinity
console.log(fact(7))
