let name = "Prabhat       ";

console.log(name.length);

let heros = ["Ironman", "Spiderman", "Thor"];

let herosPower = {
    ironman: "AI Suit",
    spiderman: "Sling",
    thor: "Hammer",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// only the Array has the access to this heyPrabhat() function other trying to access heyPrabhat() function compiler gives error

Array.prototype.heyPrabhat = function(){
    console.log("Prabhat says Hello in Array");
}

Object.prototype.prabhat = function(){
    console.log("Prabaht is present in all objects.");
}

// herosPower.prabhat();

// heros.prabhat();

heros.heyPrabhat();
// herosPower.heyPrabhat();

/* 
Below is the example of the prototypal Inheritance in javascript, which enables the functionality to access the properties of other
objects withe the help of __Proto__ property. But this is the outdated approach of the Prototypal Inheritance in JS.
*/

const User = {
    username: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Javascript Assignment",
    fullTime: true,
    // Here TASupprot given the property of TeachingSupport, where TASupport can access all the properties of TeachingSupport
    __Proto__: TeachingSupport
}

// Here Teacher can access all the properties of User

Teacher.__Proto__ = User;


// Modern Syntax of Prototypal Inheritance.

// Here we are giving access to all the properties of Teacher object to TeachingSupport.

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "PrabhatJ    ";

// Adding a function trueLength() in String that gives the true length of the string by removing the extra spaces.

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Adarsh    ".trueLength();