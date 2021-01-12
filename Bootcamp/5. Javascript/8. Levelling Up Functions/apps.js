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
