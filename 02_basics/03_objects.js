// Object literals

let mySymbol = Symbol("Key1");
let anotherSymbol = Symbol("anotherKey");

const JsUser = {
    name: "Prabhat",
    "full name": "Prabhat Jaiswar",
    email: "prabhatjaiswar30720@gmail.com",
    mySymbol: "AnyKey",
    [anotherSymbol]: "randomKey",
    age: 24,
    location: "Mumbai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
};

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySymbol);
console.log(typeof JsUser[anotherSymbol]);
console.log(JsUser["email"]);
JsUser["email"] = "prabhatjaiswar007@gmail.com";
console.log(JsUser.email);

// After freez we can not modify the javascript object
// Object.freeze(JsUser);

JsUser["email"] = "Prabhat.Jaiswar@eclerx.com";

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello from JS User");
}

JsUser.anotherGreeting = function(){
    console.log(`Hello from ${this["full name"]}`);
}

JsUser.greeting();
JsUser.anotherGreeting();
