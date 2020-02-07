const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
//title.style.color = "red";
document.title = "I own you now";
console.dir(title);

const CLICKED_CLASS = "clicked";


function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

function handleClick2(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleResize(){
    console.log("I have been resize");
}

window.addEventListener("resize", handleResize);

// function handleClick(){
//     title.style.color = "yellow";
// }

title.addEventListener("click", handleClick);


if(20 > 5 && "nicolas" === "nicolas"){
    console.log("yes");
} else {
    console.log("no");
}

const age = prompt("How old are you?");

console.log(age);
if(age >= 18 && age <= 21){
    console.log("you can drink but you should not");
} else if(age > 21){
    console.log("go ahead");
} else {
    console.log("to young");
}
