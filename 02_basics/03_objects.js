//Object singleton or describe it with the help of constructor :-

const tinderUser = new Object()//ye hai singelton Object ko likhne ka tarika 
const tinderUser2 = {}//ye hai Object ko use krne ka tarika without using contructor
//values:-
tinderUser.id = "123abc"
tinderUser.email = "User@gmail.com"
tinderUser.name = "Mohan"
tinderUser.isLoggedIn = false
console.log(tinderUser2);

// Object ke andr Objects aye toh kaise declear krte hai :-

const regularUser = {
    email:"lalu@gmail.com",
    fullname:{
         userfullname:{
              firstname : "Mohan",
              lastname : "Yadav"
         }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);//ye nesting ko opan krne ka tarika 
console.log(regularUser.fullname?.userfullname.firstname);// ishe kehte hai optional chenning yr tab use krte hai jab koi value di nhi hoti yaha agar fullname diya nhi hota toh ye use krte

//Objects ko combine krne ka tarika (jut like arrays) :-

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2)//ye curly bracket ishiliye lagate hai tai koi bhi error ke chances na ho 
console.log(obj3);
//aur ek best way hai *spread* use krne ka :-
const obj4 = {...obj1, ...obj2}
console.log(obj4);

//some methods :-
 users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//ye sari key valuse nikal deta hai
console.log(Object.values(tinderUser));//ye sari values batadeti hai 
console.log(Object.entries(tinderUser));//yr dono ko combine kr ke bata deta hai

//ye check krne ke liye ki property available hai ki nhi
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// ye bata dega value loggedin present hai ki nhi



