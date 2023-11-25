const randmNumber = Math.floor(Math.random() * 10 ) + 1;

//prompt the user to input a guess
const userGuess = prompt("Guess the number between 1 and 10");
//convert the user guess to a number

const userGuessNumber = parseInt(userGuess);

//check if the guess matches the random number
if(userGuessNumber === randmNumber){
    console.log("Good Work!");
}else{
    console.log("Not Matched Bad luck!" +randmNumber);
}