// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
function isEven(x) {
    if (x % 2 === 0)
        return true;
    else {
        return false;
    }
}

//shorter version. Because the action is boolean and asking if the statment is true or false
function isEven(x) {
    return x % 2 === 0;
}

//write a function factorial() which takes a single numeric argument and returns the factorial of that number 
function factorial(num) {
    //define the result variable
    var result = 1;
    //calculate factoprial and store value in result
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    //return the result variable 
    return result;
}

//kebabToSnake(), replace "- to "_"

function kebabToSnake(str) {
    //replace all "-" with "_"
    var newStr = str.replace(/-/g, "_")
    //return str
    return newStr;
}