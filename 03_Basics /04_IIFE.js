// Immediately Invoked Function Expression

// We do this because the global scope is often polluted with various function calls. 
// This is done to immediately invoke a function call right after it is created without calling it in the global scope
// if is done by wrapping the function in () and adding another () like (function)(); (semicolon is necessary)

(function chai() {
    console.log('I love Mickey Mouse')
})(); // a semicolon here is necessary because IIFE does not know when to end the function call

// we can write an arrow function in the same way 
// Here, the function has no name 
((name) => {
    console.log(`${name} is coding`)
})('Kaustav'); // this is how a parameter is passed in a function