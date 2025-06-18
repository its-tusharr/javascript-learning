// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//differnt syntex
let myTimeStam = Date.now()
console.log(myTimeStam);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//agar sirf Date.now()/1000 likhenge toh output decimal mei aa jata hai ishiliye Math.floor lagaya hai

//different syntex
let newDate = new Date()
console.log(newDate.getMonth() + 1);// ye months 
console.log(newDate.getDay());

//one more method Localstring ki
let newDate = new newDate.toLocaleString("default" , {
    weekday:"narrow"
})

// function to add two number
function add(a, b){
    
}
