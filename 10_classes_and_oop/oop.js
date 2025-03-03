// Object literals in JS

const user = {
    username: "prabhat",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from Database.");
        // console.log(`Username: ${this.username}`);
        // printing the current context, here the current context is user object itself
        console.log(this);
    }
};

/* console.log(user);
console.log(user.getUserDetails()); */


// Constructor function in JS

// The new keyword is the Constructor function in JS

function User(username, loginCount, isLoggedIn){
    // variable = function passing value
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // We don't have to explicitly return this the node will automaticaly returns this

    // return this;
}

const userOne = new User("Prabhat", 22, true);
const userTwo = new User("Adarsh", 22, false);

console.log(userOne.constructor);
// console.log(userTwo);

/* 
When we write new keyword

1) A new empty object is created by node
2) Constructor function is called due to new keyword
3) arguments are injected in the function variables with this context
*/