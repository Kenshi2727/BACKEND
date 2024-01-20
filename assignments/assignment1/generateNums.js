// Q2. Generate numbers between any 2 given numbers.
// Ex.
// Const num1 = 10;
// Const num2 = 25;
// Output: 11,12,13,....,25

const num1 = 10;
const num2 = 25;

for(let i = num1+1; i <= num2; i++) {
    process.stdout.write(i+",")
}