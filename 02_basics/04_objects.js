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
const {courseInstructor: Instructor} = course// ab ye courceInstructor ki jagha sirf
