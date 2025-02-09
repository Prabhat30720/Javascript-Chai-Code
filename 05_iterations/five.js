const codingLanguages = ["js", "ruby", "java", "python", "cpp", "swift", "kotlin"];

/* codingLanguages.forEach(function (items){
    console.log(items);
}); */


/* codingLanguages.forEach((item) => {
    console.log(item);
}); */


/* function printItems(item){
    console.log(item);
}

codingLanguages.forEach(printItems); */

codingLanguages.forEach((item, index, arry)=>{
    console.log(item, index, arry);
});


const coding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py",
    },
];


coding.forEach((item) => {
    console.log(`${item.languageName} ---> ${item.languageFileName}`);
});