class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        // super() calls the parent constructor and passes the arguments to initialize the parent class constructor
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const hiteshChaudhary = new Teacher("Hitesh2025", "Hitesh.Chaudhary@chaicode.com", "Hitesh@2025");
hiteshChaudhary.addCourse();

const prabhat = new User("Prabat");
prabhat.logMe();
hiteshChaudhary.logMe();

console.log(hiteshChaudhary instanceof Teacher);
console.log(hiteshChaudhary instanceof User);