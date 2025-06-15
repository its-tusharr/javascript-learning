// **********************Conversion*******************
let score = "33abc"
// conversion in number pr ye abc number mei convert nhi hona cahiye
let valueInNumber = Number(score)
console.log(valueInNumber, typeof valueInNumber)
// Output: NaN "number" (33 jo hai wo convert ho gaya, lekin "abc" ko number mei convert nhi kiya ja sakta, isliye NaN (not a number))

let score = 33
// conversion in string
let valueInString = String(score)
console.log(valueInString, typeof valueInString) // "33" "string"

let score = "33"
// conversion in number
let valueInNumber = Number(score)
console.log(valueInNumber, typeof valueInNumber) // 33 Number

let isLoggedIn = 1
// conversion in boolean
let valueInBoolean = Boolean(isLoggedIn)
console.log(valueInBoolean, typeof valueInBoolean) // true "boolean"

// 33 => "33" (string)
// "33" => 33 (number)
// 1 => true ; 0 => false (boolean)
// "" => false ; "tushar" => true (boolean) 

let isLoggedIn = "tushar"
// conversion in boolean
let valueInBoolean = Boolean(isLoggedIn)
console.log(valueInBoolean, typeof valueInBoolean)
// toh iska output true hoga, kyuki isLoggedIn mei kuch value hai, agar isLoggedIn mei koi value nahi hoti toh false hota


// *****************Operations******************

let value = 3
let negValue = -value
console.log(negValue) // -3;

// more operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2%2);

// complex operations

let str1 = "Tushar"
let str2 = "Verma"
let str3 = str1 + str2
console.log(str3); // TusharVerma   

console.log("1" + "2"); // "12" (string concatenation)
console.log("1" + 2 ); // "12" (string concatenation)
console.log(1 + "2" ); // "12" (string concatenation)
console.log("1" + 2 + 2 ); // iska output "122" hoga, kyuki sabse pehle "1" aur 2 ko concatenate kiya, phir uske baad 2 ko alag se concatenate kiya
console.log(1 + 2 + "2" ); // iska output 3 "2" hoga, kyuki sabse pehle 1 aur 2 ko add kiya, phir uske baad "2" ko string mei convert karke concatenate kiya

console.log(+true); // hoga 1, kyuki true ko number mei convert karne par 1 milta hai
console.log(+""); //iska output 0 hoga, kyuki empty string ko number mei convert karne par 0 milta hai

let gamecounter = 100
gamecounter++; // increment operator, gamecounter ki value 100 se 101 ho jayegi
console.log(gamecounter); // 101

let gamecounter = 100
++gamecounter; // pre-increment operator, gamecounter ki value 101 ho jayegi, aur phir uski value print hogi
console.log(gamecounter); // 101
