/* document.getElementById("owl").onclick = function(){
    alert("Owl Clicked");
}; */

// Event Propogation: event bubling ---> event occurs from inner HTML elements to outer HTML elements

/* document.getElementById("images").addEventListener("click", function(event){
    console.log("Clicked inside the ul");
}, false);

document.getElementById("owl").addEventListener("click", function(event){
    console.log("Owl Clicked");

    // When we don't want the reaction of outer element to happen in case of event bubling we can use stopPropagation() methos 

    event.stopPropagation();
}, false); */

// Event Propogation: event capturing ---> event occurs from outer HTML elements to inner HTML elements

/* document.getElementById("images").addEventListener("click", function(event){
    console.log("Clicked inside the ul");
}, true);

document.getElementById("owl").addEventListener("click", function(event){
    console.log("Owl Clicked");
}, true); */

/* 

Research topics: type, timeStamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY
altkey, ctrlkey, shiftkey, keyCode

*/

/* document.getElementById("google").addEventListener("click", function(event){
    // preventDefault(); prevents the default behaviour
    console.log("Google clicked!");
    event.preventDefault();
    event.stopPropagation();
}, false); */


// Remove the image from DOM on which it is clicked

document.querySelector("#images").addEventListener("click", function(event){
    console.log(event.target.tagName);

    if (event.target.tagName === "IMG") {        
        const removeIt = event.target.parentNode;
        console.log(event.target.id);
        removeIt.remove();
    }

    // removeIt.parentNode.removeChild(removeIt);
});