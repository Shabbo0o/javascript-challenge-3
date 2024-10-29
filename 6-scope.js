// JavaScript scope determines the accessibility of variables within different parts of the code.

// Task 1: Declare a variable called `globalVar` with the value "I am global".
let globalVar = "I am global";
// Task 2: Create a function called `testScope` that declares a variable called
// `localVar` with the value "I am local".
function testScope(){
    let localVar = "I am local";
    // Task 3: Inside `testScope`, print both `globalVar` and `localVar`.
    console.log("Local variable: ", localVar);
    console.log("Global variable: ",globalVar);    
}
testScope();
// Task 4: Outside of the function, try to print `localVar` and observe the result.
//console.log("Local variable: ", localVar);

/* Result: 6-scope.js:15 Uncaught ReferenceError: localVar is not defined */

