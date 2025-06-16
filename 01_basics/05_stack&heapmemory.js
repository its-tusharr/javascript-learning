// *******************stack memory*******************

// stack memory is used for static memory allocation and for function call management
// all the primitive data types are stored in stack memory
let myYoutubeChannel = "CodeWithHarry";
let anothername = myYoutubeChannel;
// myYoutubeChannel is stored in stack memory
// anothername ko myYoutubeChannel ke value se initialize kiya gaya hai uske baad anothername ka value bhi "CodeWithHarry" ho gaya hai ismei refrence ke liye copy milta hai
console.log(myYoutubeChannel, anothername); // CodeWithHarry CodeWithHarry
let anothername = "CodeWithHarry2";
// toh anothername ki value toh change hoga pr myYoutubeChannel ka value change nahi hua hai, kyunki primitive data types stack memory mein store hote hain


// *******************heap memory*******************

// heap memory is used for dynamic memory allocation and for objects
// all the non-primitive data types are stored in heap memory
let myYoutubeChannel = {
    name: "CodeWithHarry",
    subscribers: 1000000
};
// isme myYoutubeChannel ek object hai jo heap memory mein store hota hai
let anotherChannel = myYoutubeChannel; // output: { name: 'CodeWithHarry', subscribers: 1000000 }
// isme anotherChannel ko myYoutubeChannel ke value se initialize kiya gaya hai, toh dono ka refrence same hai aur ismei refrence ke liye copy nhi milta hai direct original object ka refrence milta hai 
// toh agar hum anotherChannel ke value ko change karte hain toh myYoutubeChannel ka value bhi change ho jayega