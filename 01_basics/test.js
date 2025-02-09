// console.log("Hi Github, Prabhat Jaiswar here...!");

function outerFunction(){
    const outer = "Prabhat";
    return function innerFunction(){
        const inner = "Jaiswar";
        console.log(`Hello from ${outer} ${inner}`);
    }
}

const func = outerFunction();
func();