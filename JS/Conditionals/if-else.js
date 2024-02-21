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


// give rating star for the KFC 
// star1= "not okay"
// star2 = 'emm ok'
// star3 = 'good'
// star4 = 'great'
// star5 = 'awesome'

let star = "4"
let starInt = parseInt(star)

if(starInt == 1){
    console.log("not okay");
}else if(star == 2){
    console.log("emm ok");
}else if(star == 3){
    console.log("good");
}else if(star == 4){
    console.log("great");
}else if(star == 5){
    console.log("awesome");
}else{
    console.log("i dont know what star rating you are giving");
}



// switch case 
let star1 = "5"
let starInt1 = parseInt(star1)
switch(starInt1){
    case 1:
        console.log("not okay");
        break;
    case 2:
        console.log("emm ok");
        break;
    case 3:
        console.log("good");
        break;
    case 4:
        console.log("great");
        break;
    case 5:
        console.log("awesome");
        break;
    default:
        console.log("i dont know what star rating you are giving for");
}



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


// email verification using if else
// create user input
// length of the email>11
// min 3 characters between @ and .
// after . only 2 or 3 characters should allow

const email = prompt("enter an email: ")
const emailLen = email.length;
console.log(emailLen)
const dotIndex = email.lastIndexOf(".")
console.log(dotIndex)
const atIndex = email.lastIndexOf("@")
console.log(atIndex)
const lastIndex = email.length - 1
console.log(lastIndex)

if(emailLen<11 || lastIndex-dotIndex <2 || lastIndex-dotIndex>3 || lastIndex-atIndex<3){
    console.log("invalid email")
}else{
    console.log("valid email");
}

function main(email) {
    let result;
    let emailLen = email.length;
    let lastIndex = email.length - 1;
    let dotIndex = email.lastIndexOf(".");
    let atIndex = email.lastIndexOf("@");

    // Check if email has at least 3 characters before "@": Yes, it does. Continue to the next condition.
    if (atIndex >= 3) {
        // Check if "@" is present and has at least 3 characters after it: Yes, it does. Continue to the next condition.
        if (atIndex !== -1 && emailLen - atIndex > 3) {
            // Check if there is a dot before the last alphabet: Yes, it is. The dot is at index 10, and the difference between the lastIndex (17) and dotIndex (10) is greater than 1 and less than 4.
            if (dotIndex !== -1 && lastIndex - dotIndex > 1 && lastIndex - dotIndex < 4) {
                result = email + " is valid";
            } else {
                result = "invalid email";
            }
        } else {
            result = "invalid email";
        }
    } else {
        result = "invalid email";
    }

    return result;
}

// Test Cases
console.log(main("xyz@gmail.com"));    // Output: "xyz@gmail.com is valid"
console.log(main("xz@gmail.com"));      // Output: "invalid email"
console.log(main("abc@def.com"));        // Output: "abc@def.com is valid"
console.log(main("invalid.email"));      // Output: "invalid email"
console.log(main("abc@def"));            // Output: "invalid email"

  
