// Functions // making your codes reuseable and written nicely // every methods is a function //

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


// Arguments // an Argument is simply the values being passed on
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

// Functions with Multiple Arguments // we can have more than 2 arguments 

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
