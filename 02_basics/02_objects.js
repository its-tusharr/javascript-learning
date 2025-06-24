// Object :- object mei {} use hote hai 
// object ko declear krne ke do tarike hai ek hai *Literal* ki tarha aur ek hai *constructor* ki taraha
// singalton:- ye tab banta hai jab hum constructor se banate hai matlab ye apne tarha ka ek hi object banta hai 

// Object Literals :-
const jsuser = {
    name:"tushar",
    age: 28,
    location:"jaipur",
    email: "tuahar@gmail.com",
    isLogedIn: false, 
    lastLogindDays: ["monday", "saturday"]
}
console.log(jsuser.email);//ye hi use hota hai jada tar 
console.log(jsuser["email"]);//isko [] mei ihiliye likha hai kyuki objects inhe strings ki tarha treat krtahai 
console.log(jsuser["age"]);
console.log(jsuser["isLogedIn"]);

// object ki values ko change kaise kra hai :-
jsuser.email = "tushar@chatgpt.com"//isse email overwrite ho jayegi
Object.freeze(jsuser)//isse object freeze ho jayega aur wo change nhi hoga

//ab object mei function define kr ke dekte hai
jsuser.greeting = function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());// ye function define krne ka tarika hai

jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);//ye is function mei refrence dene ka tarika hai (``) aur ${this.} use krte hai
}
console.log(jsuser.greetingTwo());
