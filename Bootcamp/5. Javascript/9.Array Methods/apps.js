// FOREACH //
// Aceepts a callback function and calls the function once per element in the array.
// ForEach doesn't get as used as much anymore because of the for of

const numbers = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12, 13, 14, 15];
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

// The filter method //
//  The filter method creates a new array with all elements that pass the test implemented by the provided function.

numbers.filter(n => {
    return n < 10
});
// so basically what filter does is that it will create a new array and run whatever we return in a new array dispalying the results of the argument so the code above here here we will get anything less than 10 returned
// It's used to create a new array, however it doesn't change anything in the original array so the numbers here will still contain everything
// Another example:
const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

// Some & Every Methods//
// Every - tests whether all elements in the array pass the provided function. it returns a boolean value.
// Some - similar to evey, but return true if any of the array elements pass the test function
// these two are boolaen and always returns true or false;

//Every 
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77,]

exams.every(score => score >= 75)
// everything arguments will be passed to every () like bove
// so if any we had a number below 75 like 74, it will return false for all of them

// Some
// similar, but this checks if some or any pass the test
// if there is some then it will so at least 1 thing has to return 
exams.some(score => score >= 75)

// Reduce Method //
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
// the accumulator, holds the sum and the currentvalue represents each element in the array 
// it does it on different calls so first call will be the first two value so 3 for accumulator
//  and 5 for currentvalue so the sum is 8 and meaning the next call 8 will be the next accumulator and
//  current will be then 7 and then so on. whatever the sum for the call is, will be used on the next accumulator  

// the parameters can be named whatever you want it to be
//  the point of its to somehow end up with a single value so it executes a reduced function of what we provid on each element of the array 
// You can also use it to add up all the values in a array
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// const total = prices.reduce((total,price) =>{
//     return total+ price;
// }) this basically sums up all the elements in the array together
// its the same as writing it like this
const total = prices.reduce((total, price) => total + price)
// if i want to find the smallest value, i can use this method 
prices.reduce((min, price) => {
    if (price < min) {
        return prices;
    }
    return min;
})

// best movie?
const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie
    }
    return bestMovie;
})
// we can also specific the starting point of our accumumilato
const evens = [2, 3, 4, 5, 6, 7];
evens.reduce((sum, num) => sum + num, 100)
// so that's going to add up all the numbers together but i can add another value, for example starting point like done here


// Arrow Function 'This'
//  the 'this' works differently when using function to how it does when using arrows.
const person = {
    firstNames: 'Kho',
    lastName: 'Morgan',
    fullName: function () {
        return `${this.firstNames} ${this.lastName}`
    },
    // when using the function this gives us the key elements because 'this'  return element on whats on the left of what we're calling so if we call person.fullName , person is on the left side of the cot and returns its value 
    // if you do the same above but change function for => it will return undefined because its refers to the windows object
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.firstNames())
        }, 3000)
        // here the => will work fine but not function because we calling a settimeOut so here function behaves like its calling the window again, but the => works fine
    }
}