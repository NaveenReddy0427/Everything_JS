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

