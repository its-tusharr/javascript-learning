// forEach loop valuses kyaa return krta hai :-

const coding = [ 'JavaScript', 'Python', 'Ruby', 'C++'];

const values = coding.forEach( (items) => {
     console.log(items);// iska output toh ayega hi 
})
console.log(values);
// yaha return toh undefine hi aaya hai iska matlab forEach loop values return nhi krta 

// more methods which are given :-

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myNums.filter((num) => num > 4); // this is Filter operation ismei condition dena hota hai jaisa ki yaha di hai (num > 4).
const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

const newNumss = myNums.filter((num) => {
  return num > 4 // yahan agar hum {} mei condition likhte hai toh fir hume return keyword likhna hi padega nhi toh wo fir empty array dega.
});
console.log(newNumss);

// ab agar hume same chiz forEach se likhni hai toh :-
const newNumsss = []
myNums.forEach ( (num) => {
     if (num > 4) {
          newNumsss.push(num)
     }
} )// ismei humen if use kr ke usmei condition lagani padegi kyuki yehi tarika hai, aur ye jo newNums.push(num) ye woh num ko call krne ke liye likha hua hai 
console.log(newNumsss);

// more example :-
const Books = [
     {title:'book one', genre:'fiction', publish:1981, edition:2004},
       {title:'book two', genre:'non-fiction', publish:1995, edition:2005},
         {title:'book three', genre:'history', publish:1982, edition:2004},
           {title:'book four', genre:'science', publish:1982, edition:2006},
             {title:'book five', genre:'fiction', publish:1990, edition:2006},
               {title:'book six', genre:'history', publish:1981, edition:2004},
                 {title:'book seven', genre:'arts', publish:1982, edition:2006},
]

let userBooks = Books.filter ( (book) => book.genre === 'fiction')

userBooks = Books.filter ((book)=>book.edition === 2006)

userBooks = Books.filter ((book) => {
     return book.publish === 1982
})

userBooks = Books.filter ((book)=> book.edition >= 2000)

console.log(userBooks);
