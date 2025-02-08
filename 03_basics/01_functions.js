function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("T");
}

// functiion Refrence ---> sayMyName, and  function call ---> sayMyName();

sayMyName();

/* function addTwoNumbers(number1, number2){
    // Here number1 and number2 is called parameters
    console.log(number1 + number2);
} */

// const result = addTwoNumbers(4, 4);   //  here result prints undefined,
// because we have not return any values from function we have just tried to print the function values. 

function addTwoNumbers(number1, number2){
    // Here number1 and number2 is called parameters
    return number1 + number2;
}

// Here (3, "4") and (3, "a") is called arguments

addTwoNumbers(3, "4");
addTwoNumbers(3, "a");

const result = addTwoNumbers(4, 4);
console.log("Result is: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please provide the username");        
        return;
    }
    return `${username} you just logged In`;
}

console.log(loginUserMessage("Prabhat Jaiswar"));
loginUserMessage();