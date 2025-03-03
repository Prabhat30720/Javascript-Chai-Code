const promise = new Promise(function(resolve, reject){
    // Do an async task
    // like DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Asynchronous task is complete");
        resolve();
    }, 3000);
});

promise.then(function(){
    console.log("Promise Consumed");
});


new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("Async task 2 is complete");
        resolve();
    }, 1000);
}).then(() =>{
    console.log("Promise 2 is Consumed");
});


const newPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chaiaurcode@gmail.com"});
    }, 5000);
});

newPromise.then(function(data){
    console.log(data);
});


const somePromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "mongoDB", password: "admin@1234"});
        }else{
            reject("ERROR: Something went wrong.");
        }
    }, 7000);
});

somePromise.then(function(data){
    console.log(data);
    return data.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected.");
});


const anotherPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "javascript@1234"});
        }
        else{
            reject("ERROR: JS went wrong.");
        }
    }, 8000);
});

async function consumeanotherPromise(){
    try {
        const response = await anotherPromise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumeanotherPromise();

// using async-await 

/* async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR:", error);
    }
}

getAllUsers(); */


// uding .then() and . catch()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
    console.log("Error:", error);
});