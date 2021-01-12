// Functions // 
// making your codes reuseable and written nicely // every methods is a function //

let die1 = Math.floor(Math.random() * 6) + 1;
let die1 = Math.floor(Math.random() * 6) + 1;
// so the code above can be used to print out 6 different random numbers
// but if for example u need 6 different sets of random numbers, instead of copying the line  6times
// You can instead use this instead for example:
let die1 = rollDie(10);
let die1 = rollDie(20);
// we can use rolldie instead and pass on different arguments to it  like above to set differne arguments

// DEfine Functions example//
function groupies() {
    console.log("do something here")
    // after we define our functions like this it doesnt run and javascript actully ignores it until we call out the function
}
groupies();
// so an order to run this function we have to call it like this an order for it to actully run


// Arguments // 
// an Argument is simply the values being passed on
// Arguments refers to the values being in here for example greet ('tim') so tim is the argument
// indeoOf('h'); the h will be the argument
// even the console.log(), we're still passing on an argument to be executed
// here's how we pass the arguments
function greeting(firstname) {
    // so here firstname is just the parameter, but what we type in firstname when calling it is called the argument
    // there's no logic or deepeer meaning of the argument being firstname, as javascript doesn't know it, just for my own sake
    console.log(`Firstname is: ${firstname}`);
}
greeting('hi')
// also when calling the function if the argument is not passed on the its going to give undefined.

// Functions with Multiple Arguments // 
// we can have more than 2 arguments 
// Make sure everything has to follow the same order throughout as everything is decided by order
function names(firstnames, lastname) {
    console.log(`Hey there, ${firstnames} ${lastname[0]}.`)
    // here I want the first name and first initial of last name
}
names('beni', 'zubi')
// This will return Hey there, Beni Z. in that order first and last name

function repeat(str, numTimes) {
    // we can also ignore an argument, but it could cause an error only if retrying to do something and not working because we ignored the argument
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        // console.log("Hi");
        result += str;
    }
}
repeat('fsfddfs', 5)
// so if I called this, it will print out 'Hi' 5 times because of the loop and the second argument is asking for the numbers of time being repeated

repeat('chicken', 10)
// because its a loop it will print it 10 times as we've asked on the second paremeter

//  RETURN //
//  Return is how we get values out of a function so we can save them and capture them
// Built - in methods returbn values when we call them we can store those values:
function addEventListener(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    // the first return has to run and stops in order for the below code to run
    return sum;
}
// The return statements ends functions execution and specifies the value to be returned by that function.
// so after you return you, any codes after that will never run as return stops the execution of our functions
// another example
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

// On this example basiclly I end up returning the last element of the array without deleting it!!! 
// then i also check to see if the array function is empty  and return null
function lastElement(n) {

    if (n.length === 0) {
        return null;
    } else {
        return n.slice(-1).pop();

    }
}
// Function to capitalise the first charracter //
function capitalize(n) {
    const a = n.charAt(0).toUpperCase();
    const b = a + n.slice(1);
    return b;

}
// Sum Array function exerice adding up all the numbers in a  array
function sumArray(n) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return n.reduce(reducer);


}
// week days exercise to  print out days of the weeek and return null if no days available
function returnDay(n) {
    let days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',
    }
    if (n <= 0 || n > 7) {
        return null;
    } else {
        return days[n];

    }
}