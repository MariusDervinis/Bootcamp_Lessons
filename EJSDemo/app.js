var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/fa/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love", {thingVar : thing})
	});

app.get("/posts", function(req, res){
	var posts = [
		{ title: "asdasdas dasas das", author: "susy" },
		{ title: "nhgnghnghgh nghfng", author: "dusy" },
		{ title: "juyjuyj yujyu j yu ", author: "lusy" }
	];
	
res.render("posts", {posts: posts} );
	
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("server is listening")
});