const codingLanguages = ["js", "java", "python", "ruby", "cpp", "swift", "kotlin"];

const values = codingLanguages.forEach((item) => {
    console.log(item);
});

console.log(values);    // prints undefined

// filter(callbackFunction) in javascript

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumArray =  numArray.filter((num) => num > 4);     // This is an example of imlicit return by filter

// explicit return of filter function

const newNumArray = numArray.filter((num) => {
    return num > 4;
});
console.log(newNumArray);

const newNum = [];

numArray.forEach((num) => {
    if(num > 4){
        newNum.push(num);
    }
});

console.log(newNum);

const books = [
    { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960, edition: 2004 },
    { title: "1984", genre: "Dystopian", publish: 1949, edition: 2008 },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: 2007 },
    { title: "Moby Dick", genre: "Adventure", publish: 1851, edition: 2010 },
    { title: "Pride and Prejudice", genre: "Romance", publish: 1813, edition: 1981 },
    { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: 2011 },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997, edition: 2013 },
    { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951, edition: 2014 },
    { title: "Brave New World", genre: "Dystopian", publish: 1932, edition: 2016 },
    { title: "The Lord of the Rings", genre: "Fantasy", publish: 2003, edition: 2018 }
];

let userBooks = books.filter((bk) => bk.genre === "Fiction");

userBooks = books.filter((bk) => {return bk.publish >= 1990 && bk.genre === "Fantasy"});

console.log(userBooks);