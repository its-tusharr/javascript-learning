// // Map is also a callback function :-

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myNums.map((num) => num + 10)
// const newNums = myNums.map((num) => num + 10)
// console.log(newNums);
// // this is simple map operation 

// now chaining in methods :-
const myNumss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumss = myNumss
            .map((num) => num * 10 )
              .map((num) => num + 1 )
                 .filter((num) => num >= 40 )
// this is known as chaining of methods isme jo methd pehle run hogi uska hi result agli metod mei as a input jayega 
console.log(newNumss);
