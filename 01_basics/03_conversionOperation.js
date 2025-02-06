// const score = "33abc";
// const score = null;
const score = undefined;

console.log(typeof score);
console.log(typeof(score));

// Converting string to number by using Number();

const valueInNumber = Number(score);

// typeof NaN is Number

console.log(typeof valueInNumber);
console.log(valueInNumber);

// const isLoggedIn = 0;
// const isLoggedIn = "Prabhat"
const isLoggedIn = "";
const booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

const randomNumber = 33;
const stringNumber = String(randomNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// ***************************************************  Operations  *********************************************************

const value = 3;
const negValue = -value;
console.log(negValue);

const str1 = "Hello";
const str2 = " Prabhat";

console.log(str1 + str2);
console.log(1 + 2);
console.log("1" + 2);
console.log(1 + "2");
console.log(true);

let gameCounter = 100;
gameCounter++;

console.log(gameCounter);