
//task 1
var num = 8;
function doMath() {
    num += 1;
    if(num % 5 == 0) {
        return true
    } else {
        return false
    }
}

//run task 1
num += 1;
doMath()

//task 2
function hi(){
    var name = "Rusty";
    console.log(name);

}
function bye(){
    console.log(name);
}

hi();

//task 3

function sing(){
    console.log("twinkle twinkle...");
    console.log("how I wonder...");
}

setInterval(sing, 1000);

clearInterval(2);

