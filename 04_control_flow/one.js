// if(condition){}

// if(2 == "2") ---> it is true, because == will only check for values not the data type, here 2 is of number type and "2" is of string type
// both having the same value but their data type is different

if(2 == "2"){
    console.log("Executed");
}

// if(2 === "2") ---> it is false, because the the data is same which is 2 but the data type does not matches, there for one is number type
// and other one is string type, condition is false.

if(2 === "2"){
    console.log("Stict equality check");
}

const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`User Power: ${power}`);
}

const amount = 1000;

if(amount < 500){
    console.log("Amount is less than 500");
} else if(amount < 750){
    console.log("Amount is less than 750");
} else if (amount < 900) {
    console.log("Amount is less than 900");
} else {
    console.log("Amount is less than 1200");
}

const isUserLoggedIn = true;
const haveDebitCard = true;

if (isUserLoggedIn && haveDebitCard) {
    console.log("Can purchase the Course");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is Logged In");
}