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

// parameter ...price is called rest operator

function calculateCartPrice(...price){
    return price;
}

console.log(calculateCartPrice(200, 400, 600));

const webDevCourse = {
    instructor: "Hitesh Choudhary",
    price: 399,
}

function handleObject(anyObject){
    console.log(`Welcome to Web Development course organised by ${anyObject.instructor} lowest price at ${anyObject.price}`);
}

handleObject(webDevCourse);

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));