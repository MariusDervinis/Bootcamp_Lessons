
//create a function that print elements from last to first
// get how many elements stored in one array
function printReverse(nums) {
    for (var i = nums.length - 1; i >= 0; i--) {
        console.log(nums[i]);
    }
}


//function returns true or false if all elements are indentical or not 
function isUniform(nums) {
    var first = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (num[i] !== first) {
            return false;
        }
    }
    return true;
}

//function that accepts an array of number and returns the sum of all numbers in the array

function sumArray(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

//or 

function sumAaray(nums) {
    var sum = 0;
    nums.forEach(function (element) {
        sum += element;
    });
    return sum;
}

//function max element

function max(num) {
    var max = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}


//creating own forEach
var colors = ["red", "orange", "yellow"]
function myForEach (arr, func) {
    //loop through array
    for(var i = 0; i <arr.length; i++) {

       //call func for each item in array
    func(arr[i]);
    }
}

myForEach(colors, function(){console.log("I AM A FUNCTION!")})(); // () call the function otherwise you cannot invoke, like all functions
myForEach(colors, function(color){console.log(color)})();

Array.prototype.myForEach = function (func) {
  for(var i = 0; i < this.length; i++){
      func(this[i]);
  }
}

var friends = ["charlie", "dave", "maddy", "caitlyn"];

friends.myForEach(alert);

friends.myForEach(function(name){
    console.log("I love " + name );
});