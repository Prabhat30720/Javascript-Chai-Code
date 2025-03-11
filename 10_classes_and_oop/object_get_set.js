const User = {
    _email: "Prabhat.Jaiswar@eclerx.com",
    _password: "Optimum@2025",

    get email(){
        return this._email.toLowerCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password = value;
    }
}

const prabhat = Object.create(User);
console.log(prabhat.email);
console.log(prabhat.password);

/* const adarsh = User;
console.log(adarsh);
console.log(adarsh._email);
console.log(adarsh._password); */