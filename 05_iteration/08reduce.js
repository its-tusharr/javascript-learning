// Reduce method mei ek :- initialValue hoti hai , ek accumulator hota hai aur ek currentValue hoti hai jo ki hume array se milti hai 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce (function(accumulator, currentValue) {
    console.log(`acc: ${accumulator} and ${currentValue}`);
    return accumulator + currentValue
}, 0)// yahan 0 humne accumulator ki value di hai jisse initialValue bhi kehte hai 
console.log(myTotal);

const myTotals = myNums.reduce ((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(myTotals);

// example :-
const shoppingCart = [
    {
        itemName: "js cource",
        price: 1999
    },
      {
        itemName: "py cource",
        price: 999
    },
      {
        itemName: "mobile dev cource",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0)

console.log(priceToPay);
