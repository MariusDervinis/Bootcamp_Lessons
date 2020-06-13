var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof",
		cat: "Meow",
		goldfish: "..."
	}
	var sound = "...?";
	var animal = req.params.animal.toLowerCase();
	
	for(i = 0; i < Object.keys(sounds).length; i++){
		if (Object.keys(sounds)[i] === animal){
			var sound = sounds[animal];

		} 
	}
	res.send("The " + animal + " says " + sound);
});


// app.get("/speak/pig", function(req, res){
// 	res.send('The pig says "Oink"');
// });
// app.get("/speak/cow", function(req, res){
// 	res.send('The cow says "Moo"');
// });
// app.get("/speak/dog", function(req, res){
// 	res.send('The dog says "Woof"');
// });

app.get("/repeat/:word/:times", function(req, res){
	var word = req.params.word;
	var times = Number(req.params.times);
	var result = "";
	for(var i = 0; i < times; i++){
		result += word + " "
	}
	res.send(result);
});
	
// 	var word = req.params.word + " ";
// 	var times = Number(req.params.times);
	
// 	res.send(word.repeat([times]));
// });

app.get("*", function(req, res){
	res.send('Sorry, page not found... What are you doing with your life?');
});

// tell express to listen requests (start server)
app.listen(3000, function(){
console.log("server has started!");
});