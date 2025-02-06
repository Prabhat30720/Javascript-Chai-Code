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
