// if-else

let temperature = 25;

if(temperature>30){
    console.log("It's hot");
}else{
    console.log("It's not hot");
}

// above 99 u will get a life and score has to be -100
// and the life has to increase by everytime you get a life
// bullets has to increase
// print statement - welcome to the game

let score = 110
let life = 3
let bullets = 2000

console.log('welcome to the game');
if(score>99){
    console.log('you got a life');
    life = life + 1;
    score = score - 100;
    bullets = 3000
    console.log(`your bullets are: ${bullets}`);;
}else{
    console.log('you did not get a life');
}

console.log(`your score is: ${score} and your life is: ${life} and your bullets are: ${bullets}`);


/* 
Problem statement
A grading system needs to be implemented for a school based on the marks obtained by the students on a test. Write a JS program to determine the grades of the students using conditional statements.

The grades will be assigned in the result variable based on the following criteria:

1- If the value of the marks variable is greater than or equal to 90, the value of the result variable should be "A grade"
2- If the marks are between 80 and 89, the value of the result variable should be "B grade".
3- If the marks are between 70 and 79, the value of the result variable should be "C grade".
4- If the marks are between 60 and 69, the value of the result variable should be "D grade".
5- If the marks are less than 60, the value of the result variable should be "F grade". 
*/

let marks = 100

if(marks>=90){
    console.log("Grade A");
}else if(marks>=80 && 89){
    console.log("Grade A");
}else if(marks>=70 && 79){
    console.log("Grade A");
}else if(marks>=60 && 69){
    console.log("Grade A");
}else {(marks<60)
    console.log("Grade A");
}







  
