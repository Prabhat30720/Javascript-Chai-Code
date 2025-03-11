class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // Maximum call stack size exceeded - because the class constructor and setter both are trying to set the value of class properties

    // getter to get the value outside of the calls

    get password(){
        return this._password.toUpperCase();
    }

    // setter to set the vaiable or properties of the class 

    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toLowerCase();
    }

    set email(value){
        this._email = value;
    }
}

const prabhat = new User("Prabhat.Jaiswar@eclerx.com", "Optimum@2025");
console.log(prabhat.password);
console.log(prabhat.email);