// for-in loop can be used to iterate thru javascript object

const programmingLanguages = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple",
    py: "python",
    java: "Java"
};


for (const key in programmingLanguages) {
    console.log(`${key} ---> ${programmingLanguages[key]}`);
}


// using for-in loop to iterate thru array in javascript

const languages = ["js", "cpp", "rb", "swift", "java", "kotlin", "py"];

for (const key in languages) {
    console.log(`${key} ---> ${languages[key]}`);   // with for-in loop, this will only print the index or keys of an array, but in case of for-of loop it will print the array values
}


// using for-in loop to iterate thru the map in javascript

const map = new Map();

map.set("IN", "India");
map.set("USA", "Unitest States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
    console.key(key);
}
