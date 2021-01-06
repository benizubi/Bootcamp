let maximum = parseInt(prompt("Enter the maximum number"));
// here we're basically using parseint to convert the argument to a string and parse the string and return an interger or NaN
while (!maximum) {

    maximum = parseInt(prompt("Enter a valid number!"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter Your First Guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess!");
    }
}
if (guess === 'q') {
    console.log("Ok, You Quit")
} else {
    console.log("Congrats You Win!")
    console.log(`YOU GOT IT! It took you ${attempts} guesses`)
}