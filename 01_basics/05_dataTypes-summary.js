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