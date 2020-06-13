var faker = require('faker');

//how many items do you want to show?
var items = 5;

console.log("====================")
console.log("WELCOME TO MY SHOP!")
console.log("====================")
for(var i = 0; i < items; i++){
console.log(faker.commerce.productName() + " - $" + faker.commerce.price())
}







//print random name and random price

//print another random name and random price


