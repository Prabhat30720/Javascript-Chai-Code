// const userEmail = "Prabhat.Jaiswar@eclerx.com";      // truthy value
// const userEmail = "";        // falsy value
const userEmail = [];           // truthy value

if(userEmail){
    console.log("Got the user Email");
}else{
    console.log("Don't find user Email");
}

// falsy and truthy values in javascript

/* 
1) false
2) 0
3) -0
4) BigInt ---> 0n
5) ""
6) null
7) undefined
8) null

Above all to be considered as a falsy values in javascript and rest of all are considered as truthy values in javascript

some examples are below

NOTE: Every non-empty string is treated as truthy value in javascript

1) "0"
2) " "      // string containing space is a truthy value
3) "false"  // string containing false is also a truthy value
4) []       // empty array is also considered as truthy value
5) {}       // empty object is also a truthy value
6) function(){} // truthy value

*/

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const myObject = {};

if (Object.keys(myObject).length === 0) {
    console.log("Object is Empty");
}


// Nullish Coalescing Operator (??): null and undefined

let value;

// value = 5 ?? 10;
// value = null ?? 10;
// value = undefined ?? 15;
value = null ?? 10 ?? 15;

console.log(value);

// Terniary operator --->  condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice < 80 ? console.log("Ice Tea Price is less than 80") : console.log("Ice Tea Price is more than 80");