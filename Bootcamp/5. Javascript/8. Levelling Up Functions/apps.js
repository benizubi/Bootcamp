//  Function Scope //
//  Variable " visibility", the location where a variable is defined impacts where we have access to that variable
let totalEggs = 0;
function collectEggs() {
    // let totalEggs = 6;
    totalEggs = 6;
}
console.log(totalEggs)
collectEggs();
console.log(totalEggs);
// these two codes above will run an error because  totaleggs has been defined withing the function (aka scopped) but not outside of it as we've set the let totaleggs within the function, therefore the code will not execute
// so instead of having let totaleggs = 6; in the function as it will not run this way,
// instead set let totaleggs outside of the function like done above and then you can call update to the same let totaleggswith diff value like here
// when we run the code the totalEggs will always be 0, until after we call for the function then it will print the 6
// another example:

let bird = 'Scarlet Macaw';
function birdWatch() {
    // let bird = 'Beni Zubi';
    console.log(bird)
}
birdWatch();
// console.log(bird)
// so if i set two let bird with different values, and i console log it, even if i call the function before, the let outside of the function will be excuted always
// However, if place the console log inside the function instead and remove the let bird withing the function and leave the external one, and call the function, then the function will run because its been set outside of it
// also if i run console inside of a function and we have a let sets with the same name inside and outside the function and calling that let name, then the one in the function will run first and if not found that's when it looks outside

// Block Scope //
// {} <------ that's what u call a block refers to everytime with that expect for functions. so for loops, is stored in a block.
//  let and const are blocks based, whereas for the same princicle, if i use var instead, it will excute even though its within the block 
// for example:
for (let i = 0; i < 5; i++) {
    let msg = 'grgrrr';
    console.log(msg)
}
console.log(msg)
console.log(i)
// so none of these code will execute because they are both withing a block scope, however if i change all the let to var, the code will still run
// Therefore, we shouldn't be using the var to diffrentiate

// Lexical Scope //
// You can have multiple nested functions!
function bankRobbery() {
    const heroes = ['Kasiki', 'Zubi', 'Beni',];
    function cryForHelp() {
        let colors = 'bingo';
        function inner() {
            for (let hero of hereos) {
                console.log(`Please HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}
// Lexical Scope is basically like having nested functions, However, even if the variable define is  like placed here, it will still run, a nested or inner function still has access to the same stuff as to the parent function or grandparant
// however if i set a variable in the nested function, the grandparent or the one above it does not have access to it as it will work for inner, but not bank robery 

// function Expressions // 

// a different way of defining functions
// functions are bojects behind the sceen with no names, but allow u to attach a name next to it
// so this is how we would usually write a function :
// function add(x, y) {
//     return x + y;
// }
const add = function (x, y) {
    return x + y;
}
// it has the same effect as the one above, the only difference here is that, we have now given this function a name.
// another exmaple: finding the square numbers
const square = function (n) {
    let a = n * n;
    return a;
};
// Higher Order Functions //
// Functions that operate on with other functions.
// They can accept other functions as arguments and return a function
function callTwice(func) {

    func();
    func()
}
function laugh() {
    console.log("beni")
}
callTwice(laugh)
// so basically the first function is used to store a prepetion of twice and then second function simple prints  and can be used to gether to print the values like done above
// here function will print beni twice and if i wanted 10 timex? i can just screate a for loop repeating 10 times and link them together

// Returning Functions //

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('congrats');
            console.log('congrats');
            console.log('congrats');
        }
    } else {
        return function () {
            alert("FAILED ")
            alert("FAILED ")
            alert("FAILED ")
        }
    }
}
// You can return functions like this.
// Another example 
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}
makeBetweenFunc(100, 200)
// so we can create more like const isChild = makeBetweenFunc(0,18) and that will only return the type of values selected.
// so this functino returns the min and max value and we can set different const names and values to return to us true or false and if they meet that age


// Defining Methods //
// a Method is a function that's been placed as a property on a object
// We can add functions as properties on objects. we call them methods 
const myMath = {
    PI: 3.2,
    // square: function (num) {
    square(num) {
        return num * num;
    },
    // cube: function (num) { this one and bellow is the same you can write functions, but u dont need it and can write like this and get the same result.
    cube(num) {
        return num ** 3;
    }
}
Math.cube(2);

// THIS in Methods //
// Use the eyword this to access other properties on the same object.
const cat = {
    name: 'beni',
    color: 'black',
    breed: 'pyjama squid',
    meow() {
        console.log(`${this.name} says MEOWWWWW`);
    }
    // usually in a object i can use console log to print out everything in cat, but if i tried to print a key it will return an error 
    // so if i wanted to be specific that's where this comes in display like used above
}
cat.meow();
const meow2 = cat.meow;

meow2();
// The value of this depends n the invocation context of the funtion it is used in.
// so the this methods works by focus on the value we have placed on the left of the . so here its cat for cat.meow(), so it returns the ojbect function as desired

// so if i call meow2(), it will not give back the same value like it did on the first time because this time when we call it its just one word and there's no . so by default the this stores it on the window and that looks more like 
// window.meow2(), even tho the meow2 is not written, but that's where it will be stored.
// so using this will evalluate  based on how you write ur code
// another example // this increases the eggcount by 1 + each time ++
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
        let a = 'EGG';
        this.eggCount;
        return a;
    }
};

// Try/Catch //
// the try and catch both has to be called for it to work and you try something and and if it doesnt run u return something to catch e.g

// checking to see if its a string if not return this
function yell(mg){
    try{
        console.log(mg.toUpperCase().repeat(3));
    }catch{
        console.log("Please Enter a String only")
    }
}