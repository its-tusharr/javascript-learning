//Arrays

const myArr = []// arrays hamesha squar bracket mei likhte hai
// javascript arrays are not associatiave arrayes unnhe access krne ke liye hune uska index dekna padta hai aue ye 0 se start hote hai
//eample
const myArr1 = ["tushar", 0, 1, 2, 3]
const myHeros = ["ironman", "hulk", "spidy"]
console.log(myArr1[0]);//toh iska output tushar aayega
console.log(myHeros[0]);//iska output ironman ayega
// different syntex
const myArr2 = new Array(1, 2, 3, 4)//agar hum new keywords ue krte hai toh [] nhi () hi use krte hai
console.log(myArr2[1]);//agar first value print karana hai toh 1 hi likhna padega 

//methods of array
const myArr3 = [0, 1, 2, 3, 4, 5]
myArr3.push(6)//push simply array mei new value add kr deta hai
myArr3.pop()//ye last value ko remove kr deta hai , ismein koi parametr nhi dete
myArr3.unshift(9)//ye array ke start mei jo value dalo wo add kr deta hai
myArr3.shift()//ye unshift ki di hui value ko hata deta hai
console.log(myArr3);

console.log(myArr3.includes());//ismei hum result mei questions puchte hai aur ye answer true/false mei deta hai
console.log(myArr3.indexOf(4));//ye btadega ki 4th place pr konsi value hai

//join
const newArr = myArr3.join()//ye jo ha dono arrays ko join kr dega aur is array ko string mei convert kr dega
console.log(newArr);

//slice and splice
console.log("a ", myArr3);//original array

const myn1 = myArr3.slice(1, 4)//ye original Array ko manupulate nhi krta hai
console.log(myn1);
console.log("b ", myArr3);

const myn2 = myArr3.splice(1, 4)//ye original Array ko manupulate krta hai
console.log(myn2);
console.log("c ", myArr3);

// ***** more of arrays****//:-

const marvalHeros = ["ironman", "hulk", "spidy"]
const dcHeros = ["flash", "batman", "superman"]
marvalHeros.push(dcHeros)
console.log(marvalHeros);
//iska jo output ayega wo array ke ander array ata hai jo ki sahi nhi hai

//toh isse bachne ke liye *Concat* ya fir *Spread* aur *Flat* ka use krte hai
// marvalHeros.concat(dcHeros)
const allNewHeros = marvalHeros.concat(dcHeros)
console.log(allNewHeros);

// [...marvalHeros, ...dcHeros] ye spread ko likhne ka tarika hai
const allNewHeros2 = [...marvalHeros, ...dcHeros]
console.log(allNewHeros2);

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [9, 8,]]
const newanotherarray = anotherarray.flat(Infinity)//yahan pr depth dena padta hai ki kitna solve krna hai toh agar infinity likh do toh koi problem nhi wo apne aap hi solve kr leta hai
console.log( newanotherarray);

// data ko Array mei convert krne ki process :-

console.log(Array.isArray('tushar'));//ye array ko check krne ka tarika
console.log(Array.from('tushar'));//ye *form* isse array mei convert kr dega

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));//ye *of* kisi bhi set of element ko array mei convert kr dega
