// Arrow functions and THIS keywords & their usage in JavaScript

const user = {
  name: 'John',
  price: 100,

  welcomeMessage: function () {
    console.log(`Welcome ${this.name}, your price is ${this.price}`);// here this refers to current context, which is the user object
    console.log(this); // yahan THIS print krane se woh sare block scope matlab inner scope ki details de deha
    
  }
}

user.welcomeMessage(); // Welcome John, your price is 100
// Arrow functions do not have their own 'this' context, they inherit it from the parent scope
user.name = 'SAM';// yahan hamne user object ki name property ko change kiya hai
user.welcomeMessage(); // Welcome SAM, your price is 100 kyunki yahan THIS changed user object ko refer kar raha hai

console.log(this); // lekin yahan THIS print krne se ye ek empty scope dega kyuki iske pass koi global scope nhi hai 

// arrow function kaise likha jata hai :-

const chai = () => {// bs yahan function ki jagha => ye likh dete hai
   let username = "tushar"
   console.log(this.username);
}
chai()

const basicArrow = () => {}; // this is the basic syntex of arrow function

//basic arrow function :-
const addTwo = (num1, num2) => { // jab bhi curly braces use karte hai to hume return statement likhna padta hai
  return num1 + num2 
}
console.log(addTwo(3, 5)); // iska output 8 aayega

// emplicit return technique :-
const addTwo2 = (num1, num2) => (num1 + num2); // yahan humne return statement ko remove kr diya hai aur direct expression likh diya hai
console.log(addTwo2(3, 5)); // iska bhi output bhi 8 hi aayga

const object = (name, price) => ({ 
  name: name,
  price: price
}); // yahan hum object ko return krne ke liye parentheses ka use kar rahe hai
console.log(object('Tushar', 100)); // { name: 'Tushar', price: 100 } iska output aayega