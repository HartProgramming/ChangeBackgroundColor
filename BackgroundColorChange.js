/* Query Selectors that are changed once Button is clicked */
let body = document.querySelector("body");
let button = document.querySelector("button");

/* Array of colors that change when Button is clicked */
let colorArray = ["red", "purple", "pink", "blue", "green", "red", "orange"];

/* Random function that selects a random position in the
colorArray */
function random(x){
    return Math.floor(Math.random()* x)
}

button.addEventListener("click", function(){
    let bodyColor = body.style.backgroundColor = colorArray[random(7)];
    button.style.backgroundColor = bodyColor;
})