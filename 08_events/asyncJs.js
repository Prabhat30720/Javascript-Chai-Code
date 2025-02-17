const greeting = function(){
    console.log("Hello Prabhat!");
};

const changeText = function(){
    document.querySelector("h1").innerHTML = "Best Javascript Series on YouTube."
};

const changeMe = setTimeout(changeText, 2000);

document.querySelector("#stop").addEventListener("click", function(){
    clearTimeout(changeMe);
    console.log("STOPPED");
});
