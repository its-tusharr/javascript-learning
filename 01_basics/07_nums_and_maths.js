/*1*/const score = 100
console.log(`your score is ${score}`); // this will print the string with the score

/*2*/const balance = new Number(1000);
console.log(balance); // this will print the number object
console.log(balance.toString().length); // this will convert the number object to string
console.log(balance.toFixed(2)); // this will convert the number object to string with 2 decimal places]

/*3*/ const otherNumber = 1234.654987
console.log(otherNumber.toPrecision(4)); // output dega 1235

/*4*/ const hundreds = 100000
console.log(hundreds.toLocaleString('en-In')); 

 
//*************maths**************//

console.log(Math);
console.log(Math.abs(-4));//this will convert the negative value to positive
console.log(Math.round(4.6));//ye output roundoff mei kr dega
console.log(Math.ceil(4.6));//ye roundoff krega pr value dega 5 matlab agli value
console.log(Math.floor(4.9));//ye bhi roundoff krega pr pichli value lega toh output 4 dega
console.log(Math.min(4, 3, 6, 8));//min value batayega
console.log(Math.max(4, 3, 6, 8));//max value batayega

console.log(Math.random());
console.log(Math.random()*10);//iski value 0-1 ke bich mei ati hai aur *10 kr do toh decimal shift ho jata hai
console.log((Math.random()*10) + 1);//ye +1 ishi liye kiya taki output agar 0.1 aata hai toh ye usse 1 bana dega

//trick for this
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)+min)) // fir iise value jaise cahuye aa jayegi ye tabhi use hota hai jab min aur max define krna hota hai;

