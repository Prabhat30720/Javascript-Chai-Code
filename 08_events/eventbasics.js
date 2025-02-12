/* document.getElementById("owl").onclick = function(){
    alert("Owl Clicked");
}; */

// Event Propogation: event bubling ---> event occurs from inner HTML elements to outer HTML elements

/* document.getElementById("images").addEventListener("click", function(event){
    console.log("Clicked inside the ul");
}, false);

document.getElementById("owl").addEventListener("click", function(event){
    console.log("Owl Clicked");
}, false); */

// Event Propogation: event capturing ---> event occurs from outer HTML elements to inner HTML elements

document.getElementById("images").addEventListener("click", function(event){
    console.log("Clicked inside the ul");
}, true);

document.getElementById("owl").addEventListener("click", function(event){
    console.log("Owl Clicked");
}, true);

/* 

Research topics: type, timeStamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY
altkey, ctrlkey, shiftkey, keyCode

*/