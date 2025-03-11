function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toLowerCase();
        },
        set: function(value){
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    });
}

const prabhat = new User("Prabhat.Jaiswar@eclerx.com", "Optimum@2025");
console.log(prabhat.email);
console.log(prabhat.password);