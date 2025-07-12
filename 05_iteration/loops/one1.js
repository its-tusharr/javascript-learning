// iteration using for loop
// for loop :-

for (let index = 0; index < array.length; index++) {
    const element = array[index];
} // iska pure sytax ka matlab hai pehle index se start hoga fir condition check hogi agar condition true hui toh fir element ko access karega aur fir index ko increment karega, ye process tab tak chalega jab tak index array ki length se chhoti hai

// for loop is used to iterate over a block of code a number of times
// it consists of three parts: initialization, condition, and increment/decrement

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element); // this will print numbers from 0 to 9
} 
// in this example, the loop starts with index 0, checks if index is less than 10, and prints the value of index. After each iteration, index is incremented by 1 until it reaches 10.
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
       console.log("5 is best number");
    }
    console.log(element); // this will print numbers from 0 to 9
} 

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
    console.log(`inner loop: ${j} of outer loop: ${i}`);
    }
}// this is a nested for loop, where the outer loop runs 11 times (from 0 to 10) and for each iteration of the outer loop, the inner loop runs 11 times (from 0 to 10). It will print the current value of i and j in each iteration.

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
    console.log(i + '*' + j + '=' + i * j); // this will print the multiplication table for each value of i from 0 to 10
 }
}

myArray = ["flash", "batman", "superman"];
// this is an array of superheroes
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(`Superhero: ${element}`); // this will print each superhero in the array
}

// there are two keywords to break out of a loop in JavaScript: `break` and `continue`

for (let index = 1; index <= 20; index++) {
    if (inder == 5) {
        console.log("5 is best number");
        break; // this will exit the loop when index is 5
    }
    console.log(`value if index is: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (inder == 5) {
        console.log("5 is best number");
        continue; // this will skip the current iteration when index is 5 and continue with the next iteration
    }
    console.log(`value if index is: ${index}`);
}