// singelton Object

const tinderUser = new Object();

// literal Object

const anotherTinderUser = {};

anotherTinderUser.id = "Prabat3072";
anotherTinderUser.name = "Prabhat Jaiswar";
anotherTinderUser.isLoggedIn = false;

// console.log(tinderUser);
// console.log(anotherTinderUser);

const regularUser = {
    email: "Prabhat.Jaiswar@eclerx.com",
    fullName: {
        userFullName: {
            firstName: "Prabhat",
            lastName: "Jaiswar",
        },
    },
};

// console.log(regularUser.fullName.userFullName.firstName);

const prabhat = {
    name: "Prabhat Jaiswar",
    organization: "eClerx Services Ltd.",
    designation: "Analyst",
    experience: 1.5,
};

const adarsh = {
    fullName: "Adarsh Rai",
    Organization: "REBIT",
    Designation: "Softwae Engineer",
    Experience: 1.5,
};

const neeraj = {
    CompleteName: "Neeraj Tiwari",
    currentOrganization: "Worley",
    currentDesignation: "Instrumentation Engineer I",
    currentExperience: 2.5,
};

// const allObjects = {prabhat, adarsh, neeraj};

// Object.asssign(target, source);

// const allObjects = Object.assign({}, prabhat, adarsh, neeraj);

// merge all the objects by using spread operator

const allObjects = {...prabhat, ...adarsh, ...neeraj};
console.log(allObjects);

// user data fetching from Database

const users = [
    {
        name: "Prabhat Jaiswar",
        organization: "eClerx Services Ltd.",
        designation: "Analyst",
        experience: 1.5,
    },
    {
        fullName: "Adarsh Rai",
        Organization: "REBIT",
        Designation: "Softwae Engineer",
        Experience: 1.5,
    },
    {
        CompleteName: "Neeraj Tiwari",
        currentOrganization: "Worley",
        currentDesignation: "Instrumentation Engineer I",
        currentExperience: 2.5,
    }
];

console.log(users[0].name);

console.log(Object.keys(anotherTinderUser));
console.log(Object.values(anotherTinderUser));
console.log(Object.entries(anotherTinderUser));

console.log(anotherTinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName : "Javascript by Hitesh Chaudhary",
    price: 0,
    courseInstructor: "Hitesh Chaudhary",
};

// desctructuring the object values in javascript

// const {courseInstructor} = course;

// we can rename the object variables

const {courseInstructor: instructor} = course;
console.log(instructor);

// APIs return a values from backend, ealry the APIs values comes in XML structure but now it is in JSON format

// How JSON looks like ? It looks like a object but without the name, in JSON the key-value pair are always be in string format

{
    "name": "Hitesh Chaudhary",
    "coursename": "JS in Hindi",
    "price": "Free",
}