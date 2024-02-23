// if user provide email and password , allow to login otherwise ask to enter an email using and(&) operator

const Email = "";
const password = "";

if(email && password){
    console.log("allow to login");
}else{
    console.log('please enter email and password');
}



// email verification using if else
// create user input
// length of the email>11
// min 3 characters between @ and .
// after . only 2 or 3 characters should allow

// using or operator 
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


// using and operator 
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
