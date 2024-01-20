// Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
// method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
// procesing fee associated with each payment method. For example, "credit" may have a procesing fee of
// 2%, "debit" 1.5%, and "paypal" 3%.

var price=2000;
// var method='credit'
// var method='debit'
// var method='paypal'
let method='haha'

switch(method){
    case "credit": console.log("You have chosen 'credit' as payment option:")
                   price+=price/50
                   console.log(`Grand Total after 'processing fees' applied:"₹${price}/-"`)
                   break;
    case "debit":  console.log("You have chosen 'debit' as payment option:")
                   price+=price*0.015
                   console.log(`Grand Total after 'processing fees' applied:"₹${price}/-"`)
                   break;
    case "paypal": console.log("You have chosen 'paypal' as payment option:")
                   price+=price*0.03
                   console.log(`Grand Total after 'processing fees' applied:"₹${price}/-"`)
                   break;
    default:console.log("Invalid Input");      
}