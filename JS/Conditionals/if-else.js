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