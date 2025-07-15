// for of loop :-
// this loop is used to iterate over iterable objects like arrays, strings, etc. , these aur more of a aray specific loop

[{}, {}, {}] // array ke andar objects hain
["", "", ""] // array ke andar strings hain

const superheroes = ["flash", "batman", "superman"];
for (const hero of superheroes) {
    console.log(`Superhero: ${hero}`); // this will print each superhero in the array  
}// the loop will iterate over each element in the array and print it

const greeting = "hello";
for (const greet of greeting) {
    console.log(`Character: ${greet}`); // this will print each character in the string    
    // the loop will iterate over each character in the string and print it
}

// Maps in javascript :-
// Maps are collections of key-value pairs, where keys can be of any type and values can be any type as well.
const myMap = new Map();
myMap.set('In', "India")
myMap.set('US', "United States")
myMap.set('UK', "United Kingdom")
console.log(myMap);
//ab hum isspe loop laga sakte hain
for (const [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`); // this will print each key-value pair in the map
} // the loop will iterate over each key-value pair in the map and print it 
 
// Object ke andar forof loop laga kr dekhte hai:-
// yahan objects mei ye forof loop wala tarika kaam nhi krta !
const myObject = {
    'Object1': "value1",
    'Object2': "value2",
}
for (const [key, value] of myObject) {
    console.log(`Key: ${key}, Value: ${value}`); // this will not work as expected
} // this will throw an error because objects are not iterable in this way
