function multipleBy5(num){
    return num*5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createuser(type, price){
    this.type = type;
    this.price = price;
}

createuser.prototype.increment = function(){
    this.price++;
}

createuser.prototype.printPrice = function(){
    console.log(`Price of ${this.type} is: ${this.price}`);
}

const chai = new createuser("chai", 25);
const tea = new createuser("tea", 250);

chai.printPrice();

chai.increment();
console.log("New Price:");
chai.printPrice();


/* 

Here's what happens behind the scenes when the new keyword is used:

A new Object is created: The new keyword initiates the creation of the new javascript object.

A prototype is linked: The newley created object gets linked to the prototype property of the constructor function. This means
that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newley created 
object. If no explicit return value is specified from the constructor, Javascript assumes this, the newley created object, to be 
the intended value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, 
array, functions, etc.) the newlwy created object is returned.

*/