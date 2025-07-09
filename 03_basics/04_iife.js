// IIFE immediately invoked function expression
// This is a function that runs as soon as it is defined
// It is a design pattern that helps to avoid polluting the global scope
// It is also used to create a private scope for variables
 
function chai (){
    console.log("chai is ready");
}
chai(); // chai is ready , ye toh normal function call hai

// IIFE syntax
(function (){ // this also called named function IIFE
    console.log("chai is ready");
})(); // chai is ready , ye IIFE hai jo ki immediately invoke ho raha hai
// ()ismei function ki definition hoti hai aur () ke baad () mei function ko call kiya jata hai aur yahan ; lagana zaruri hai 

; ( () => {
    // This is an arrow function IIFE
    console.log("chai is ready");
}) (); // chai is ready , ye bhi IIFE hai jo ki immediately invoke ho raha hai

// issmei parameter kaise pass karte hai :-
( (name) => {
    console.log(`Hello ${name}, chai is ready`);
})("Tushar"); // Hello Tushar, chai is ready , yahan pr humne parameter pass kiya hai jo ki function ke andar use ho raha hai