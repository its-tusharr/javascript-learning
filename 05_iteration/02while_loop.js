// while loop :-

let index = 0; // initialization
while (index <= 10) { // condition
    console.log(`value of index is ${index}`); // this will print the value of index from 0 to 10
    index = index + 2; // increment
} // the loop will continue as long as the condition is true

myArray = ["flash", "batman", "superman"];
// this is an array of superheroes
let arr = 0;
while (arr < myArray.length) { // condition
  console.log(`Superhero: ${myArray[arr]}`); // this will print each superhero in the array
  arr++; // increment
} // the loop will continue as long as the condition is true

// do while loop :-

let score = 1; // initialization
do{
    console.log(`score is ${score}`); // this will print the value of score
    score++; // increment
}while(score <= 10); // condition
// iss loop ka matlab hai ki pehle block of code execute hoga aur fir condition check hogi, agar condition true hui toh loop continue hoga, agar false hui toh loop terminate ho jayega.