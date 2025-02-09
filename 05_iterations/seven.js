const numArray =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using map() to operate and iterate thru all the elements of an array

const nums = numArray.map((num) => num + 10);
console.log(nums);

// javascript function chaining

const newNums = numArray
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40);
console.log(newNums);