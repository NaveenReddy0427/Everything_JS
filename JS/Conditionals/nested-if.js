// if user provide email and password , allow to login otherwise ask to enter an email

const email = "";
const password = "";

if(email){
    if(password){
        console.log("allow to login");
    }else{
        console.log('enter the password')
    }
}else{
    console.log("enter an email ");
}