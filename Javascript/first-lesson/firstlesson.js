var firstname = prompt("what is your first name");
var lastname = prompt("what is your last name");
var age = prompt("what is your age");
var days = age * 365.25;
var days = Math.round(days);
alert("nice to meet you, " + firstname + " " + lastname + ", you look quite young for " + age + " years old!");
alert("you been alive for " + days + " days.")
console.log("Your info " + firstname + " " + lastname + " " + age + " years old " + days + " days living");