console.log( 2 > 1 ); // true
console.log( 2 < 1 ); // false
console.log( 2 >= 1 ); // true
console.log( 2 <= 1 ); // false
console.log( 2 == 1 ); // false
// these are simple comparison operators

console.log("2" > 1 ); // true, string "2" is converted to number 2
console.log("01" == 1 ); // true, string "01" is converted to number 1
console.log(true == 1 ); // true, boolean true is converted to number 1
console.log(false == 0 ); // true, boolean false is converted to number 0
console.log(null == undefined ); // true, null and undefined are equal
// these are type coercion or we can say complex comparison operators

console.log( null > 0 ); // false, null is converted to number 0
console.log( null == 0 ); // false, the reason is that an equality check (==) and comparison (>) (<) (>=) (<= ) operators behave differently in JavaScript , comarision converts null to number 0, but equality check does not convert null to number 0
console.log( null >= 0 ); // true, the reason is that an equality check (==) and comparison (>) (<) (>=) (<= ) operators behave differently in JavaScript , comarision converts null to number 0, but equality check does not convert null to number 0
console.log( undefined > 0 ); // false, undefined is not converted to number
console.log( undefined < 0 ); // false, undefined is not converted to number
console.log( undefined >= 0 ); // false, undefined is not converted to number   
console.log( undefined <= 0 ); // false, undefined is not converted to number
console.log( null == undefined ); // true, null and undefined are equal
// these are special cases in JavaScript, where null and undefined behave differently in comparison and equality checks

console.log("2" === 2); // false, strict equality check (===) checks for both value and type, so string "2" is not equal to number 2
console.log(true === 1); // false, strict equality check (===) checks for both value and type, so boolean true is not equal to number 1
