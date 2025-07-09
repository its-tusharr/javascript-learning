{}// iss curly braces ko hi scope kehte hai 

// like if we take :-

var c = 3000 // ye jo bhi if ke bahar hai usse hum global scope kehte hai 
if (true) {
    let a = 10
    const b = 20  // ye jitna bhi if ke andar hai wo block scope hai 
    var c = 30
}
// global scope ka data block scope mei use ho sakta hai pr block scope ka data bahar nhi ja sakta 
// iska drawbag ye hai ki yahan jab bahar *var ki value 3000 di hai pr wo result 30 hi dega kyuki andr 30 hai aur ye sirf *var ke case mei hota hai 

// what-if we take *let
let b = 3000
if (true){
    let a = 30
    const b = 40
}
console.log(b);// yahan pr output 3000 hi ayega , hum inner *b* aur outer *b* dono ko alag alag bhi define kr sakte hai 

let a = 3000
if (true){
    let a = 30
    const b = 40
    console.log("INNER:", a); // yehen se inner *a* print ho jayega
}
console.log(a);// yahan se outer *a* print ho jayega

// Nested Scope :-

function one (){
   const username = "tushar"

    function two (){
         const website = "tushar.com"
         function three (){
              console.log(username, website); // yahan pr dono hi access ho jayenge kyuki nested scope mei outer scope ka data use ho sakta hai 
         }
         three()// yeh function call karne par three mei username aur website dono hi access ho jayenge
    }
}

function one (){
    const username = "tushar"

        function two (){
            const website = "youtube"
             console.log(username); // yahan pr bhi username access ho jayega kyuki two mei one ka data use ho raha hai kyuki two one ka child hai
        }
        console.log(website); // yahan pr website access nhi ho payega kyuki two mei one ka data use ho raha hai pr one mei two ka data use nhi ho raha hai

        two() // yeh function call karne par two mei username hi access ho jayega      
}
       one() // yahan pr one ko call karne par two bhi call ho jayega aur kudh one bhi call ho jayega 

// ab if , else lenege same senario ke liye :-

if (true) {
    const username = "tushar"
    if (username === "tushar") {
        const website = "tushar.com"
        console.log(username + website); // yahan pr dono hi access ho jayenge kyuki nested scope mei outer scope ka data use ho sakta hai 
    }
    console.log(website);// yehen pr website access nhi ho payega kyuki website sirf inner scope mei hai aur outer scope mei nhi hai
}
console.log(username);// yahan pr username bhi access nhi ho payega kyuki username sirf outer scope mei hai aur inner scope mei nhi hai

//***********hosting in function in two different syntex************/

addone(5); 
function addone (num){
    return num + 1;
}
// yahan pr function call karne par bhi function ka result aayega kyuki function ko hosting kehte hai aur function ko hosting mei sabse pehle call kiya jata hai

addtwo(5);
const addtwo = function (num){
    return num + 2;
}
// yahan pr function call karne par error aayega kyuki function ko hosting mei sabse pehle call kiya jata hai aur iss syntex mei function ko hosting nahi kiya jata hai isliye error aayega