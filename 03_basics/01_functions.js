function sayMyName() {
    console.log("h");
      console.log("i");   // ye hi syntex hai function ko likhne ka 
        console.log("t");
          console.log("e");
            console.log("s");
              console.log("s");  
}
sayMyName()

function addTwoNumbers (number1, number2){
    console.log(number1 + number2);    
}
addTwoNumbers(3, 7)
// pr jab hum iska result nikalenge :-
const result = addTwoNumbers(3, 7)
console.log("Result:", result);// toh iss result ki value undefined ayegi 

// toh sahi taika hai :-
function addTwoNumbers (number1, number2){
    let result = number1 + number2
    return result    
}
const result = addTwoNumbers(3, 7)
console.log("Result:", result);
// toh ab iska output result : 10 ayega 

// ek aur tarikaa :-
function addTwoNumbers (number1, number2){
   return number1 + number2
}
const result = addTwoNumbers(3, 7)
console.log("Result:", result);

// ek aur function :-
function loginUserMessage(username){
    return `${username} just logged in` // yahan ${} use krne ka karan ye hai ki jo bhi username function ko milega usko wo string ki arha use krega.
}
console.log(loginUserMessage("tushar"));

// jab argument mei kuch bhi na ho toh :-
function loginUserMessage(username){
    return `${username} just logged in` 
}
console.log(loginUserMessage());// toh iska result undefined ayega 

// ab funcion ko check krne ka tarka :-
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return // yahan return likhne se ye niche wale return ki code line run hi nhi hogi
    }
    return `${username} just logged in` 
}
console.log(loginUserMessage())

// ! if situation me (!) lagane se wo situation ko ulta kr deta hai matlab ki true ko false bana deta hai afalse ko true 