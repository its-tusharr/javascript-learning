// if and else

if (true)// ye condition hai jo ki true hai toh ye block execute hoga
{
    console.log("This is true block");
}

const isUserLoggedIn = true; // ye variable hai jo ki true hai
if (isUserLoggedIn) { // agar isUserLoggedIn true hai toh ye block execute hoga
    console.log("User is logged in");
}
// some conditions used for checking <, >, <=, >=, ==, !=, ===(ye type bhi check karta hai), !==(ye negative sign check karta hai)

// if else condition
const temperature = 31; // ye variable hai jo ki temperature ko store karta hai in short yahan hum define kar rahe hai ki temperature 30 hai
if (temperature > 30) { // agar temperature 30 se zyada hai toh ye block execute hoga
    console.log("less then 50 degrees");
}else {
    console.log("greater then 50 degrees");
}

// nested if else condition
const balance = 1000; // ye variable hai jo ki balance ko store karta hai
if (balance < 500) { // agar balance 500 se kam hai toh ye block execute hoga
    console.log("less then 500");
} else if (balance < 750) { // agar balance 500 se zyada hai aur 1000 se kam hai toh ye block execute hoga
    console.log("less then 750");      
} else if (balance < 900) { // agar balance 750 se zyada hai aur 1000 se kam hai toh ye block execute hoga
    console.log("less then 750");
} else { // agar balance 900 se zyada hai toh ye block execute hoga
    console.log("greater then 900");
}

// real life example of if else condition
const userLoggedIn = true;
const dabitcard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && dabitcard) { // agar user logged in hai toh ye block execute hoga
    console.log("allow to buy course");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) { // || ye tab use hota hai jab humein do conditions check karni hoti hai aur agar dono me se koi bhi condition true ho toh ye block execute hoga
    console.log("user logged in");
}