const marvel_heros = ["Thor", "Iron-Man", "Spider-Man"];
const dc_heros = ["Superman", "Batman", "Flash"];

// marvel_heros.push(dc_heros);

/* console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][1]); */

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// concat two arrays using spread operator [...]

const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usableArray = anotherArray.flat(Infinity);
console.log(usableArray);

console.log(Array.isArray("Prabhat"));

// Array.from(argTobeArray); converts into an array

console.log(Array.from("Prabhat"));
console.log(typeof(Array.isArray("Prabhat")));


console.log(Array.from({name: "Prabhat"}));     // here we are truing to convert an object into an array, so we have to clearly mentioned that on which 
                                                // basis you are trying to create an array? based on keys or values in objects ?

const firstHalf = 100;
const secondHalf = 200;
const thirdHalf = 300;

// Array.of(setOfElements);  It converts set of elements in javascript into an array

console.log(Array.of(firstHalf, secondHalf, thirdHalf));