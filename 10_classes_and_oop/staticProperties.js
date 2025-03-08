class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(this.username);
    }

    // static function: static functions can not be accessible by class instances or objects

    static createId(){
        return `123`;
    }
}

const prabhat = new User("Prabhat");
// console.log(prabhat.createId());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const hitesh = new Teacher("Hitesh", "Hitesh.Chaudhary@chaicode.com");

hitesh.logMe();
console.log(hitesh.createId());