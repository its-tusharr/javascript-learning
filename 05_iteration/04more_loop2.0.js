// loops for objects
// for in loop :-
// this loop is used to iterate over the properties of an object, including inherited properties.

const myObject = {
    'js': "JavaScript",
    'py': "Python",
    'rb': "Ruby",
    'cpp': "C++",
}
for (const key in myObject) {
    console.log(`Key: ${key}, Value: ${myObject[key]}`); // this will print each key-value pair in the object
} // the loop will iterate over each property in the object and print it

// For in loop with array
const myArray = ['JavaScript', 'Python', 'Ruby', 'C++'];
for (const key in myArray) {
    console.log(myArray[key]); // this will print each element in the array, which means in array the keys start from 0 bydefault so if we only print key it will print 0, 1, 2, 3
}

const myMap = new Map();
myMap.set('In', "India")
myMap.set('US', "United States")
myMap.set('UK', "United Kingdom")

for (const key in myMap){
    console.log(key);    
}// ye jo hai woh output nhi dega kyki maps for in loop use kr ke irritate nahi hote hain, 

