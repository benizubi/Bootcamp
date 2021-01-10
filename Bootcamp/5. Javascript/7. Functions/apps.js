// Functions // making your codes reuseable and written nicely

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
