const name = "Prabhat";
const repoCount = 1;

// console.log(name + " " + repoCount);

// string Interpolation

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// string Object

const gameName = new String("counter-strike");
console.log(gameName);
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));
console.log(gameName.indexOf("r"));

const newString = gameName.substring(0,7);
console.log(newString);

const anotherString = gameName.slice(-7, 14);
console.log(anotherString);

const userString = "   Prabaht   ";
console.log(userString);
console.log(userString.trim());

const url = "https://hitesh.com/chaiaur%20code.com";
console.log(url.replace("%20", ""));
console.log(url.includes("chaiaur"));

// converting string into an array

console.log(gameName.split("-"));