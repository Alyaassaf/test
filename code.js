const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    
];


/*const course = courses.find(function(course){
    return course.name === 'a';
}); */
const course = courses.find(course =>  course.name === 'a');
console.log(course);

let run = function walk(){ //Named function expression
    console.log('run');
};
let run1 = function(){ //anonymous function expression
    console.log('run');
};