# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1: Color Switcher

```javascript
console.log("javascript Project: Color Switcher");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button){
    button.addEventListener("click", function (event){
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id;   // body.style.backgroundColor = "grey";
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id;   // body.style.backgroundColor = "white";
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id;   // body.style.backgroundColor = "blue";
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id;   // body.style.backgroundColor = "yellow";
        }
    });
});

```

## Project 2: BMI Calculator

```javascript

const form = document.querySelector('form');

// This use case will give you empty values from text boxes

/* const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value); */

form.addEventListener('submit', function (event){
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid height";
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight";
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        // show the result

        result.innerHTML = `<span>${bmi}</span>`
    }
});

```

## Project 3: Digital Clock

```javascript

// const clock = document.querySelector("#clock");

const clock = document.getElementById("clock");


// setInterval(callback, time); ---> run a javvascript function in a particular time frame

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```