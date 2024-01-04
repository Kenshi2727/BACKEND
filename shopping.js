amount =450
day="Monday"

if(amount<100){
amount=amount-amount/10
}
else if(amount>100 && amount<200){
    amount=amount-amount/5
}
else if(amount>200 && amount<500){
    amount=amount-amount*0.3
}
else{
    amount=amount-amount/0.4
}

if(day=="Monday")
{
    amount -= 10
}

console.log("Final amount is:",amount)
  

//replace with ternary operations


amount =450

amount=(amount<100)?amount-amount/10:(amount>100 && amount<200)?amount-amount/5:(amount>200 && amount<500)?amount-amount*0.3: amount-amount/0.4

if(day=="Monday")
{
    amount -= 10
}

console.log("Final amount is:",amount)
 