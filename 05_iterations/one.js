// for loop

for (let index = 0; index <= 10; index++) {
    if(index === 5){
        console.log("This is number 5");
    }
    console.log(index);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    console.log(`Table of ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

const superHeros = ["superman", "batman", "ironman", "thor", "hulk"];

for (let index = 0; index < superHeros.length; index++) {
    console.log(superHeros[index]);  
}


// break and continue

console.log("break");

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("Number 5 is detected");
        break;
    }
    console.log(index);
}

console.log("continue");

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("Number 5 is detected");
        continue;
    }
    console.log(index);
}