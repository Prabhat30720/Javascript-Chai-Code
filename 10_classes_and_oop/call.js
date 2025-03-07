function setUsername(username){
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    // To hold the reference of the function we use call(); and passing this as a first parameter in call() which referes to the current context
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const prabhat = new createUser("Prabhat", "Prabhat.Jaiswar@eclerx.com", "Optimum@2025");
console.log(prabhat);