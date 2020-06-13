//first exercise
$("div").css("backgroundColor", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "4px solid orange");
$("div").eq(0).css("color", "pink");

//methods
$("h1").eq(1).text("Methods Exercise");
$("ul").first().html("<li>Oranges</li><li>Apples</li><li>Pears</li><li><a target='_blank' href='http://google.com'>Click me to go to google</a></li>");
$("img").css("width", "200px").css("height", "200px");
$("img").first().attr("src", "https://i.pinimg.com/236x/7c/93/76/7c93767461ca8dc2e2fd817472df8abb.jpg");
$("img").last().attr("src", "https://i.pinimg.com/236x/4b/77/39/4b7739fe0d292ba5b335b45a5f150920.jpg");
$("img:nth-of-type(2)").attr("src", "https://i.pinimg.com/236x/b9/cc/45/b9cc45cfab260ec7be6a3a8db643492f.jpg");
$("input").attr("type", "text");
$("input").val("I wrote a text for you");
$("select").val("Turtle"); 
$("h1").eq(0).removeClass("correct");
$("h1").eq(1).addClass("correct");
$("ul:first li").addClass("wrong");
$("ul").first().on('selectstart', false); //unselectible my mouse
$("select").toggleClass("correct");
$("button").click(function(){ //.click - addEventListener in vanilla js
    $("select").toggleClass("correct");
    $("button").text("Change class");
});
$("ul:first li").click(function(){
    $(this).toggleClass("wrong"); //$(this) - .this in vanilla js
    $("input").val(($(this).text())); //(this)li text writing to input text box
});

$("body").on("keypress", function(event){
    event.which === 32 && $(this).css("background-color", "yellow");
    $("ul:nth-of-type(2) li:nth-of-type(1)").addClass("wrong");
});
$("ul:nth-of-type(2) li").on("mouseover", function(){
    var randomColor = randomColor();
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
    $(this).css("color", randomColor);
    $("ul:nth-of-type(2) li:nth-of-type(2)").addClass("wrong");
});

$("ul:nth-of-type(2) li:nth-of-type(3)").on("click", function(){
$("ul:nth-of-type(2) li").length === 4 ? $(this).addClass("wrong"): $(this).text("Click me again to create another list element");
$("ul:nth-of-type(2) li").length <= 3 ? $("ul:nth-of-type(2)").append("<li>Event .on can work as a .click event too!</li>"): $("ul:nth-of-type(2) li").length <= 4 ? $("ul:nth-of-type(2)").append("<li>Click me to delete whole page &#128550</li>"): null;
$("ul:nth-of-type(2) li:nth-of-type(5)").on("click", function(){
    $("body").html("<h1>THE PAGE HAS BEEN DELETED!!</h1>")
    })
});


$("img").on("mouseover", function(){
$(this).fadeOut(1000);
})
