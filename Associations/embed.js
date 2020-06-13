var mongoose	 	= require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });



//post - title, content (goes first because of a schema)
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

//user - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
// 	email: "songoku@dbz.jp",
// 	name: "Son Goku"
// });

// newUser.posts.push({
// 	title: "How to learn kamehame",
// 	content: "come to kame house to practice with me"
// });


// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });


// var newPost = new Post({
// 	title: "Reflection of Apples",
// 	content: "They are delicious"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);	
// 	} else {
// 		console.log(post)
// 	}
// });

User.findOne({name: "Son Goku"}, function(err, user){
	if(err){
		// console.log(err)
	} else {
		user.posts.push({
			title: "3 villans you need to defeat",
			content: "Picolo, Cell, Boo"
		});
		user.save(function(err, user){
			if(err){
				console.log(err)
			} else {
				console.log(user)
			}
		})
	}
});

