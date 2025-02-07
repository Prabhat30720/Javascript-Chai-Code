// Array

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]);

const myHeros = ["shaktiman", "nagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);


// Array Methods

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);   // unshift() add the elements in the array at 0th index
myArr.shift();      // shift() removes the value in the array which is at 0th index
myArr.shift();
myArr.shift();
myArr.shift();


console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const anotherArray = myArr.join();      // join() method converts an array to a string.
console.log(myArr);
console.log(typeof myArr);
console.log(anotherArray);
console.log(typeof anotherArray);


// slice and splice

console.log("Original Array: ", myArr);

const sliceArray = myArr.slice(0, 3);
console.log("Slice Array:", sliceArray);

console.log("No Change in Original Array after slice: ", myArr);

console.log("Original Array: ", myArr);

const spliceArray = myArr.splice(0, 3);     // splice(startIndex, endIndex or numberOfElementsToBeRemoved) removes the elements from the original array. splice() manipulates the original array
console.log("Splice Array:", spliceArray);

console.log("Changes in Original Array after using splice", myArr);