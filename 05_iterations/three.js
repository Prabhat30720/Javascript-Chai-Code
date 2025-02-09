// for-of loop

const myArray = [1, 2, 3, 4, 5];

for (const element of myArray) {
    console.log(element);
}


const greetings = "Hello JavaScript!";

for (const greet of greetings) {
    console.log(greet);
}

// Map in javascript ---> Map() in javascript is well known for it's uniqueness, they don't repeat values

const map = new Map();

map.set("IN", "India");
map.set("USA", "Unitest States of America");
map.set("FR", "France");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
    console.log(`${key} ---> ${value}`);
}


// looping thru with the objects

const games = {
    game1: "NFS",
    game2: "Spiderman",
    game3: "Battleground",
    game4: "Call of Duty",
};

/* for (const [key, value] of games) {
    console.log(`${key} ---> ${value}`);    // Error: games is not iterable
} */