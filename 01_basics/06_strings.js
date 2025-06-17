const name = "dogesh"
const repocount = 40 
// console.log(name + repocount);
console.log(`hello my name is ${name} and my repo count is ${repocount}`); //this is the most preacised and readable syntex also known as string interpolation

// one more method of declearing string
const gameName = new String("Call of duty");
console.log(gameName); // this will print the string object
// agar hum same chiz ko browser mei print karae toh wo iski lengths characters ki position aur iske prototypes bhi dega
// example
console.log(gameName.__prototype__); // this will print the string objects
console.log(gameName.length); // this will print the length of the string
console.log(gameName[4]); // this will print the third character of the string cauz its start from 0
console.log(gameName.charAt(4)); // this will print the third character of the string
console.log(gameName.toUpperCase()); // this will print the string in upper case
console.log(gameName.toLowerCase()); // this will print the string in lower case
console.log(gameName.indexOf("duty")); // this will print the index of the string
console.log(gameName.lastIndexOf("duty")); // this will print the last index of the string
console.log(gameName.slice(0, 4)); // this will print the string from the 6th character to the 4th character
console.log(gameName.slice(4)); // this will print from the fourth character to the end of the string

// one more method of declearing string *trim and replace*
const newString1 = "   dogesh   ";
console.log(newString1.trim()); // this will remove the spaces from the start and end of the string

const newString2 = "dogesh is a good";
console.log(newString2.replace("good", "bad")); // this will replace the first occurrence
// split into array
console.log(newString2.split); // this will split the string into an array on the basis of the space
