// tuthy and falsy values in JavaScript
// truthy values are those which evaluate to true in a boolean context
// falsy values are those which evaluate to false in a boolean context  
// in short iska matlab hum kudh se assum kr lete hai ki ye value toh true hi hoga yaa ye value toh false hi hoga toh unhe hum truthy aur falsy values bolte hai

const userName = "John";
if (userName) {
    console.log("got userName"); 
} else {
    console.log("don't got userName");
}
// yahan toh humne userName ko define kiya hi nhi na koi == use kiya na koi comparision toh yahan hum assume kr lete hai ki strig ke andr true value hai toh ye block execute hoga
// iska output hoga "got userName" kyuki userName ki value "John" hai jo ki truthy value hai
// agar empty string hoti toh ye block execute nhi hota kyuki empty string falsy value hoti hai

// falsy values in JavaScript :-
// 1. false
// 2. 0 , -0
// 3. "", '', `` (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)
// 7. BigInt(0n) (BigInt zero)

// truthy values in JavaScript :-
//true
//"0" (string with zero is truthy, but 0 is falsy)
// 1. any non-empty object (including arrays and functions)
// 2. any empty, non-empty array []
// 3. any non-zero number (positive or negative)
// 4. any non-empty string (even a single space " ")
// 5. any non-null object
// 6. {} (empty object)
// 7. functions () {} (empty function)

//------------------------*-------------------

// nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined
let val1 ; 
val1 = 5 ?? 10; // val1 is 5, because it is not null or undefined ye use krte hai jab humein default value set krni hoti hai agar value null ya undefined ho toh
val2 = null ?? 10; // val2 is 10, because left-hand side is null
val3 = undefined ?? 10; // val3 is 10, because left-hand side is undefined
val4 = 0 ?? 10; // val4 is 0, because 0 is a valid value (not null or undefined)
val5 = "" ?? 10; // val5 is "", because empty string is a valid value (not null or undefined)
console.log(val1, val2, val3, val4, val5); // output: 5 10 10 0 ""

// Terniary operator , also known as the conditional operator, is a shorthand for if-else statements
const iceTeaPrice = 50;
iceTeaPrice >= 80 ? console.log("Ice tea is expensive") : console.log("Ice tea is cheap");
// output: "Ice tea is cheap" because iceTeaPrice is 50 which is less than 80