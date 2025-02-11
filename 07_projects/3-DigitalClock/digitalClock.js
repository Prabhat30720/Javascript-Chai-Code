// const clock = document.querySelector("#clock");

const clock = document.getElementById("clock");


// setInterval(callback, time); ---> run a javvascript function in a particular time frame

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);