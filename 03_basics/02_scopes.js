// var c = 300;

// global scope declaration of variable a

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner a:", a);
}


console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Prabhat";
    
    function two(){
        const website = "https://youtube.com";
        console.log(username);
    }

    // console.log(website);

    two();
}

one();
// two();


if(true){
    const username = "Prabhat";
    if (username === "Prabhat") {
        const website = " https://youtube.com";
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


// ******************************************************* Interesting Questions ********************************************

console.log(addone(5));

function addone(num){
    return num + 1;
}

console.log(addTwo(5));     // Error: ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}
