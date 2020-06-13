var mongoose	 	= require("mongoose");

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });



//post - title, content (goes first because of a schema)
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
module.exports = mongoose.model("Post", postSchema);