// reduce() in javascript

const numArray = [1, 2, 3, 4, 5];

const numTotal = numArray.reduce(function (accumulator, currentValue){
    console.log(`acc: ${accumulator} and currVal: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(numTotal);

const total = numArray.reduce((acc, currVal) =>acc + currVal , 0 );
console.log(total);

const shoppingCart = [
    {
        itemName: "Web Development Course",
        price: 399,
    },
    {
        itemName: "Mobile App Development",
        price: 5999,
    },
    {
        itemName: "Data Science Course",
        price: 12999,
    },
    {
        itemName: "AI/ML Course",
        price: 15999,
    },
];

const totalCoursePrice = shoppingCart.reduce((accumulator, item) => accumulator + item.price , 0);
console.log(totalCoursePrice);