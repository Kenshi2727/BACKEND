// Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
// positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
// given integer.

input=100;
n=input;
sum=0;
do{
sum+=n;
n--;
}while(n>0);

console.log("Sum of numbers from 0 to "+input+" is "+sum);
