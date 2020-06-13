var body = document.querySelector("body"); //SELECT
var isBlue = false; //setting up first steps

setInterval(function(){   //MANIPULATION
    if (isBlue) {
        body.style.background = "white";  //if body background is white
    }
    else {
        body.style.background = "#3498db";//if its not white it is blue
    }
    isBlue = !isBlue;  //changing from blue to not blue again
}, 1000); //repeat after ms