//*Object de-structuring :-

const course = {
    coursename: "java script",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor);
//another syntex :-
const {courseInstructor} = course
console.log(courseInstructor);
//de-structuring :-
const {courseInstructor: Instructor} = course// ab ye courceInstructor ki jagha sirf Instructor likhne se bhi kaam chal jayega
 
//* Something about API's :-
// api ka syntex bhi object ki tarha hi hota hain
// isse jaison formate kehte hai
{
    "name"= "hitesh",
    "course" = "js in hindi",
    "courseFee"= "free"
}