// FOREACH //
// Aceepts a callback function and calls the function once per element in the array.
// ForEach doesn't get as used as much anymore because of the for of

const numbers = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];
// function print(element) {
//     console.log(element)
// }
// print(numbers[0])
// print(numbers[1])

// so instead of printing each number individually from the array like doen above, a foreach would work better instead because you can actually just use one for each line and it will print everything in the area from 1,2,3,4,5.. and actually return the array values so instead u can do this. for example
numbers.forEach(function (el) {
    if (el % 2 == 0) {
        console.log(el)
    }
});
//here i chose to only print out the even numbers

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
];
// printing out alien - 90/100
movies.forEach(function (movie) {
    console.log(`${movies.title} - ${movie.score}/100`)
});

// MAP // so it makes a new array array for us 
// A map creates a new array with the results of calling a callback on every element in the array
const doubles = numbers.map(function (num) {
    return num * 2;
});
// so the code abobe we're using a map function to make a new copy of this array and perform something like stated here
// and we can save it to a variable 
// using the movie array to just print titles 
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});
//  examplle another exmaple  trims all spaces and 
//
function cleanNames(names) {

    return names.map(function (name) {
        return name.trim();
    }
    );

}
//Array Functions //
// they help us write functions withiout action writting the keyword functions, instead arrows are used

// const add = function(x,y){
//     return x+y;
// } this how we usually write functions 

const add = (x, y) => {
    return x + y;
}
const square = (num) => {
    // const square = num => { does the same thing as the code above.

    return num * num;
}
const rolleDie = () => {
    return Math.floor(Math.random() * 8) + 1;
}
// const rolleDie = () => ( instead of using the curly bracket this ( allow us to return the function without twitting return
//      Math.floor(Math.random() * 8) + 1;
// ) though this only work if theres a single line of value to return, if thee's more function it won't work
// also you don't even need to use  () in order for the function to run for example:
const add = (a, b) => a + b
// perfect to use when returning short arguments

// so if there's no arguments to be passed, you always need the empty () then the arrow =>
// also you can wrrite the code without needing the (), so if we're only working with a single variable in the parameter then we can directly write it like the x => code commented out
// Hwoever write them without the (), only works for for single values and if you have no parameter to pass on then u need to als to have them, if we had more than once, thing to list in the parameter then we will have to do that.

// Arrow Function WrapUP //

const newMovies = movies.map(function () {
    return `${movie.title} - ${movie.score / 10}`
});
const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`);
// so that's how you'd rewrite using arrows. 

// setTimeOut and setInterval //
console.log("BENI")
setTimeout(() => {
    console.log('Are you still there??')
}, 3000)
console.log("ZUBI")
// settime allows you to set a short pause before returning the functions you want to pass on, so 3000 millisecond is equivilant to 3 sec
// so if i run this, beni and zubi will show up, but then after 3 seconds, that's when settimeout will work.

// setInerval //
// will call a function call back, every few seconds so you can repeat something at an interval
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);
clearInterval(id);
// Hwoever this repeats and to stop it you need to use the const id we created to stop it you will need to use clearInterval(id) for it to stop.
