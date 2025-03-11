console.log(Math.PI);

// Trying to change the value of PI but it won't change

Math.PI = 5;

console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// create an object

const chai = {
    chaiName: "Ginger chai",
    price: 20,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
};

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "chaiName"));

// Enabling the object to update or change it's properties

Object.defineProperty(chai, "chaiName", {
    // writable: false,
    // enumerable: false,
    // if enumerable: true then we can iterate the chaiName property of object chai else not iterable if enumerable: false
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(chai, "chaiName"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }

    // console.log(`${key} - ${value}`);
}