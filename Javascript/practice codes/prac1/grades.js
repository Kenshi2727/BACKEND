// Q1 Write a program that grades students based on their marks.
// . If greater than 90 then A Grade
// . If betwen 70 and 90 then a B grade
// . If betwen 50 and 70 then a C grade
// . Below 50 then an F grade

let marks = 91;
let grade = "";
if(marks > 90){
    grade = "A";
}
else if(marks > 70 && marks <= 90){
    grade = "B";
}
else if(marks > 50 && marks <= 70){
    grade = "C";
}
else if(marks <= 50){
    grade = "F";
}
console.log(`Marks are ${marks} and grade is ${grade}`);
