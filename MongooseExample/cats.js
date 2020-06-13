var mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


//adding a new cat to the db

// var george = new Cat({
// 	name: "Silver",
// 	age: 6,
// 	temperament: "Kawaii"
// });

// george.save(function(err, cat){
// if(err){
// 	console.log("SOMETHIGN WNENT WRONG")
// }	else {
// 	console.log("We just save a cat to the db")
// 	console.log(cat);
// }
// });

Cat.create({
	name: "Togo",
	age: 15,
	temperament: "Heroic"
})

//retrieve all cats from db and console.log each one

Cat.find({}, function(err, cats){
	if(err){
	console.log("SOMETHIGN WNENT WRONG")
			console.log(err);
}	else {
	console.log("ALl THE CATS")
	console.log(cats);
}
})