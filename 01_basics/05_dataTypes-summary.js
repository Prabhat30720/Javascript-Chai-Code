// Primitive Data types

// 7 types: string, number, boolean, null, undefined, symbol, bigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;   // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 12345678900987654321n;

// Reference Type (Non-Primitive Type)

// Array, Objects, functions, all Non-Primitive return type is object

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name : "hitesh",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world !");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);


// ********************************************* stack memory and heap memory ***********************************************

// stack memory: All primitive data types of javascript uses stack memory. In javascript any primitive datatype is declared we get copy of it
// anything changes in copy it does not reflect into the origignal stack memory

// Heap memory: All Non-primitive data types of javascript uses heap memory. In javascript any Non-Primitie datatype is declared we get a refrence
// but the reference variable which pointing to heap memory it get memory allocation in stack memory area
// any changes in refrence type does reflect to the origianl object because it points or refers to the that object or memory location

let myYouTubeName = "hiteshchaudharydotcom";

let anotherName = "chaiaurcode";

console.log(myYouTubeName);
console.log(anotherName);

let user = {
    email: "user@gmail.com",
    upi: "userbank@upi",
};

console.log(user.email);

let anotherUser = user;

anotherUser.email = "anotherUser@google.com";

console.log(user.email);
console.log(anotherUser.email);