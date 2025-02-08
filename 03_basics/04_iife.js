// Imediately Invoked Function Expressions (IIFE)

/* What is the need of IFFE?
--> 1) While building an application, we encounter the problems with global scope pollution. To avoid the global scope variable declared
       pollution we use IFFE
    
    2) To run a function imediately the lauch of the application. e.g. Database connectivity to application
       
*/

/* function dbSetup(){
    console.log("Data-Base Connected");
}
dbSetup(); */

// to stop the execution of IIFE we need to add the semicolon ; at the end

// This is an example of named IFFE

(function dbSetup(){
    console.log("Data-Base Connected");
})();


// This is an example of un-named IFFE

((version) => {
    console.log(`Mongo DB Connected ${version}`);
})("25.2.1.0");