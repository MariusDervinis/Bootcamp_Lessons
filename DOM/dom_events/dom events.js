
var labelArray = document.querySelectorAll("label");
for (var i = 0; i < labelArray.length; i++) {
    labelArray[i].addEventListener("click", function () {
        this.style.border = "1px solid blue";
    });
};