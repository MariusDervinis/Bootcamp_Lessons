alert("Welcome to the Moe's tavern for posh people only!! Here you can find finest beers in the town!");
alert("Wait, before I let you pass, You need to fill in this form first.");
var callby = "";
var perSQ = "";
var age = Number(prompt("How old are you? Please enter your age: "));
var days = age * 365.25;
var days = Math.round(days);

if (age <= 0 || age > 100) {
    var age = Number(prompt("Haha very funny, I can see from your face you are lying, I ask again, how old are you??"))
}
if (age <= 0 || age > 100) {
    alert("That's it I'm calling a police!!")
    throw("");
}
var gender = String(prompt("what is your gender"));
if (gender == ("male" || "boy" || "man") && age > 10) {
    var callby = "Mister";
    }
    else if (gender == ("female" || "girl" || "woman") && age > 10) {
    var callby = "Miss";
    }
    else if (gender == ("male" || "boy" || "man") && age <= 10) {
        var callby = "young boy";
    }
    else if (gender == ("female" || "girl" || "woman") && age <= 10) {
    var callby = "little lady";
    }
        
if (age <= 4) {
    alert("Where is your mother, " + callby  + "?" + " " + "You can't enter here." + " " + perSQ);
}
var firstname = prompt("what is your first name");
var lastname = prompt("what is your last name");

if (age % Math.sqrt(age) === 0) {
    var perSQ = "Coincidentally you age is a perfect square!";
}


if (age < 18 && age > 4) {
    alert("You are too young to enter, come back when you grow up, " + callby + " " + perSQ);
}
else if (age >= 18 && age < 21) {
    alert("You may enter, but don't let me see you drinking any alcohol, " + callby + " " + lastname + " " + perSQ);
}
else if (age === 21) {
    alert("Happy brithday, "+ callby + " " + firstname +" " + lastname + "!! You may enter and have a free shot on us!!" + " " + "Can you imagine, you been living " + days + "in this world!");
}
else
    alert("The bar is open. Come in and please enjoy, " + callby + " " + firstname +" " + lastname + " " + perSQ);
    throw("");