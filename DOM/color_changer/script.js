var button = document.querySelector("button");
var isBlue = false;
// button.addEventListener("click", function(){
// if (isBlue){
//     document.body.style.background ="white";
//     isBlue = false;
// } else {
//     document.body.style.background ="blue";
//     isBlue = true;
// }

// });

button.addEventListener("click", function(){
    document.body.classList.toggle("blue"); 
})
