var h2 = document.querySelector("h2");
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var rrButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var scoreDifference = 0;
var gameOver = false;
var numInput = document.querySelector("input");
var setScore = 3;

numInput.addEventListener("change", function(){
    setScore = Number(numInput.value);
});


p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === setScore) {
            //p1Display.style.color = "green";
            //Or
            p1Display.classList.add("winner");
            gameOver = true;
            scoreDifference = p1Score - p2Score;
            if (p2Score === 0) {
                h2.textContent = ("The Winner is Player Two with " + p1Score + " poins. Flawless Victory!!");
            }
            else {
                h2.textContent = ("The winner is Player One with " + scoreDifference + " points ahead!!")
            }
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === setScore) {
            p2Display.classList.add("winner");
            gameOver = true;
            scoreDifference = p2Score - p1Score;
            if (p1Score === 0) {
                h2.textContent = ("The Winner is Player Two with " + p2Score + " points. Flawless Victory!!");
            }
            else {
                h2.textContent = ("The winner is Player Two with " + scoreDifference + " points ahead!!")
            }
        }
        p2Display.textContent = p2Score;
    }
});

rrButton.addEventListener("click", function () {
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner"); 
    p1Score = 0;
    p1Display.textContent = 0;
    p2Score = 0;
    p2Display.textContent = 0;
    gameOver = false;
    h2.textContent = ("");
});

