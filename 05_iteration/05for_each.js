// // for each :-

// // forEach (): yahan forEach loop mei kyaa hoya hai ki callback function pass kiya jata hai , call back function aur normal function mei ye difference hota hai ki callback function ko kisi dusre function ke andar pass kiya jata hai aur dusra function usko call karta hai, aur normal function mei array ke elements ko iterate karne ke liye use kiya jata hai.
// // inke syntax mei bhi difference hota hai :-
// // function = function myFunction(element, index, array) {
// //     console.log(element, index, array);
// // }
// // callback function =  function (element, index, array) {
// //     console.log(element, index, array);
// // } ismei function ke naam ki zarurat nahi hoti hai, yahan function ko directly pass kiya jata hai.

// const coding = [ 'JavaScript', 'Python', 'Ruby', 'C++'];
// coding.forEach (function (items)//here items is used as a parameter to access each element of the array
// {
//    console.log(items); // this will print each element in the array

// })

// // Jab arrow use hota hai toh arrow function mei bhi function ke naam ki zarurat nahi hoti hai, 
// coding.forEach( (items) => {
//    console.log(items);  
// })

// coding.forEach((item, index ,array) => {
//     console.log(item, index, array); // this will print each element, its index, and the entire array    
// });// yahan item, index, array ye sab parameters hain jo forEach function ke andar pass kiye gaye hain, item se hum array ke element ko access karte hain, index se hum uska index access karte hain aur array se hum poore array ko access karte hain

// // Agar function pehle se define kiya hua hai toh usko bhi use kar sakte hain
// function printItems(item) {
//    console.log(item);
// }
// coding.forEach(printItems); // this will also print each element in the array
// // yhana humne bs reference pass kiya hai function ka, aur forEach function usko call karega

//[{}, {}, {}] // array ke andar objects hain :-
const myCoding = [
    { name:  'JavaScript', type: 'Programming Language' },
    { name: 'Python', type: 'Programming Language' },
    { name: 'Ruby', type: 'Programming Language' }
]
myCoding.forEach((item) => {
    console.log(`Name: ${item.name}, Type: ${item.type}`); // this will print each object's name and type
});// yahan humne array ke objects ko iterate kiya hai aur unke properties ko access ki
// yahan {item.name} aur {item.type} ishiliye use kiya hai kyunki item ek object hai aur uske andar name aur type properties hain, toh hum unhe access kar rahe hain