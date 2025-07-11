// switch case statement is used to execute one block of code among many alternatives based on the value of an expression.
// switch case is more readable and cleaner than multiple if-else statements when dealing with multiple conditions
// switch case is not used for boolean values, it is used for checking multiple values of a variable or expression

// syntax of switch case :-
switch (key) {
    case value:
        // code to be executed if key matches value
        break; // break statement is used to exit the switch case
    default:
        // code to be executed if no case matches
        break; // break statement is used to exit the switch case
}

const month = 3;
switch (month) {
    case value1: // value1 is the value to be matched with month
        console.log("January");
         break;

    case value2: // value2 is the value to be matched with month
        console.log("february");
         break;

    case value3: // value3 is the value to be matched with month
        console.log("March");
         break;

    case value4: // value4 is the value to be matched with month
        console.log("april");
         break;

    default:
        console.log("default case match");
        break;
// iska output hoga "March" kyuki month ki value 3 hai aur case 3 ke saath match ho raha hai
}

// agar string ho toh :-
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;                  
    case "Thursday":
        console.log("Today is Thursday");
        break;
    default:
        console.log("It's a weekend");
        break;
// iska output hoga "Today is Monday" kyuki day ki value "Monday" hai
}

