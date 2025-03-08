// ES6 classes in javascript

/* class User{
    // constructor in javascript
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method (function) in class

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const prabhat = new User("Prabhat30720", "Prabhat.Jaiswar@eclerx.com", "Optimum@2025");
console.log(prabhat);
console.log(prabhat.encryptPassword());
console.log(prabhat.changeUserName()); */


// Behind the scene function works same as class

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
};

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const prabhat = new User("Prabhat30720", "Prabhat.Jaiswar@eclerx.com", "Optimum@2025");
console.log(prabhat);
console.log(prabhat.encryptPassword());
console.log(prabhat.changeUserName());