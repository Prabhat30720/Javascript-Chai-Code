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

## Project 4: Guess the Number Game

```javascript

let randomNumber = parseInt(Math.random()* 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

// let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number");
    }else if(guess < 1){
        alert("Number can not be less than 1");
    }else if(guess > 100){
        alert("Number can not be more than 100");
    }else{
        // prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right !`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is Too Low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is Too HIGH`);
    }
}


function displayGuess(guess){
    userInput.value =  "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}


function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}


function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(event){
        randomNumber = parseInt(Math.random()* 100 + 1);
        // prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        lowOrHigh.innerHTML = "";
        playGame = true;
    });
}


```

## Project 5: Event Key Code Project

```javascript

const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
    insert.innerHTML = `
        <div class ="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${event.key === " " ? "Space":event.key}</td>
                    <td>${event.keyCode}</td>
                    <td>${event.code}</td>
                </tr>
            </table>
        </div>
    `;
});

```


## Project 6: Change Background Colors

```javascript

// Generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];   
    }
    return color;
};

let intervalId;

const startChangingColor = function(){

    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }   

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    };
};


const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

```