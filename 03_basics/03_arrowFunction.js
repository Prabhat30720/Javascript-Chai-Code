const user = {
    username: "Prabhat",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
};

/* user.welcomeMessage();

user.username = "Adarsh";
user.welcomeMessage(); */

// Here this refres to global Window{} object

console.log(this);


function chai(){
    const username = "Prabhat";
    // Here we get result as undefined, we can not use this keyword when dealing with functions
    console.log(this.username);
}

chai();

/* const chaiFunc = function(){
    const username = "Prabhat";
    console.log(this.username);
}; */

// Arrow function declaration

const chaiFunc = () => {
    const username = "Prabhat";
    console.log(this.username);
}

chaiFunc();

const anotherChaiFunc = () => {
    const username = "Prabhat";
    // here this refresh to global window object {}
    console.log(this);
}

anotherChaiFunc();

// Arrow function declaration and example

const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(3, 4));

// Implicit return arrow function. NOTE: we can also use parentheses () for implicit return in arrow function 

const implicitAdditionReturn = (num1, num2) => num1 + num2;

console.log(implicitAdditionReturn(5, 5));

// Function Returning an object 

const anotherUser = () => ({name: "Prabhat Jaiswar"});
console.log(anotherUser());