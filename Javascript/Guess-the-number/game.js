//Create secret number and ask user to guess
//check guess

var secretNumber = 4;
var guess = Number(prompt("Guess a number"));

if (guess = isNaN()) {
    alert("Its not a number!!!");
    location.reload();
    throw("");
}
//check if guess is right
if (guess === secretNumber) {
    alert("You guessed the number") 
}
else if (guess > secretNumber){
    alert("Too High guess again");
}
else {
    alert("Too Low guess again");
}