//  Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 23);      // Date(year, month, date);   in javascript-date month starts from 0 = january to 11 = december
console.log(myCreatedDate.toDateString());

const anotherDate = new Date("2025-02-08");     // Date() format ---> Date("yyyy-mm-dd")
console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

const newDate = new Date();
console.log(newDate);