var express = require("express");
var app = express();

//routes

// "/" => "Hi there!"
// "/bye" => "Good Bye!"

app.get("/", function(req, res){
	res.send("Hi there!");
});

app.get("/r/:sub", function(req, res){
	var sub = req.params.sub;
	res.send("welcome to the" + sub + " sub");
});

app.get("/r/:sub/comments/:id/:title", function(req, res){
	var sub = req.params.sub;
	var title = req.params.title;
	res.send("welcome to comment page of " + sub + " " + title );
});

app.get("/bye", function(req, res){
	res.send("bye");
})
// "/dog" => "meow"
app.get("/dog", function(req, res){
	console.log("someone made a req to /dog!! ")
	res.send("meow");
})

app.get("*", function(req, res){
	res.send("Path not found");
});

// tell express to listen requests (start server)
app.listen(3000, function(){
console.log("server has started!");
});