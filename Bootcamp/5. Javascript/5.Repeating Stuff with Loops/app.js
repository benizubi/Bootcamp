// LOOPS!!!!!!!!!!!
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// For Loop here is doing the same as what's listed above
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Even numbers 0-20
for (let a = 0; a <= 20; a += 2) {
    // so for the even number loop 0 is where we wanna strt, if i wanted to start at 4, i'd change the 0 to 4 for example
    // Also the == and += is the same thing when using a loop.  the 2 at the end here is that so it returns even number which is 2
    // so for it to be an even number it adds the 0 and 2 which gives 2. 
}
// Odd number 1-20
for (let e = 1; e <= 20; e += 2) {
    console.log(e)
    // for odd number we'd have written 1 instead of 0 and  leave 2 because 2+1 gives u 3 and that's an odd number
}
// To count from 100-0 printing in 10s
for (let c = 100; c >= 0; c -= 10) {
    console.log(i);
    // here we have to subtract coz going down so start with the number reach, then - 10 each time from c  and c is greater or same as 0 for starting
}
for (let b = 10; b <= 1000; b *= 10) {
    console.log(b);
    // or could even do it like this so it prints  10 as the first, then it * by 10 each time and asnwr <=1000.
}
// Infinite Loops/ This never stops and takes up loads spaces or could crash ur system coz it never stops running, running you out of memories
for (let i = 20; i >= 0; i++) {
    console.log()
}

// Looping Over Arrays//

// To Look Over an Array, start at index 0 and continue looping to until last index length-1
const animals = ['lions', 'tigers', 'bears'];
for (let z = 0; z < animals.length; z++) {
    console.log(z, animals[z]);
    // animals[z] to print all of them, as if we wanted to find a specific we'd use the index number instead of the z
}
// same example from above but reversed so going from above, back down
for (let o = animals.length - 1; o >= 0; o--)
// .length prints +1 more  of the inital so to get the full length we have to use -1
{
    console.log(animals[o])
    // to access the array we need to use the animals[o] format
}

// NESTED LOOPS / printing individual names//
const seatingChart = [
    ['Kristine', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
for (let m = 0; m <= seatingChart.length; m++) {
    const row = seatingChart[m];
    console.log(`Row # ${m + 1}`)
    // the seatingchart represents the rows
    // the console prints out "row" so we know which row we're accessing

    for (let k = 0; k < row.length; k++) {
        // this loops then prints out everything in the row
        console.log(row[k])
    }
}
// So here the first for loop is designed to print out all the arrays rows 
// But to select work from nested arrays, we need to use a nested for loop like here
// The second/ nested loop, allows us to print each names individually 


// WHILE LOOPS //
//  continues running as long as the test condition is true
// let num = 0;
// while(num <10)
// {
//     console.log(num);
//     num++;
// }

// Password prompt for entering the right password. //
const Secret = "BabyHippo";

let guess = prompt("Enter The Secret Code");
while (guess !== Secret) {
    guess = prompt("Enter it now")
}
console.log("CONGRATS")
// this only runs if the while statements is true


// THE BREAK KEYWORD / common with loops//
// This allows you to break the loop and execute something for example:
let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
    guess = Math.floor(Math.random() * 10);
    if (guess === targetNum) {
        console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
        break;
    }
    else {
        console.log(`Guessed ${guess}...Incorrect!`);
        // this code gets ran because the if statement states if its the same, break out and execute  this line here so it breaks out of the loop and reads the next line
    }
}


// For..of/ mainly used with arrays // This is used all the time

// This is a nice and easy way of interating over arrays or other iterable objects. Example:
const subreddits = ['time', 'arguing', 'sports', 'time', 'sleep', 'sex', 'food']
for (let l = 0; l < subreddits.length; l++) {
    console.log(`Visit reddit.com/r/${subreddits[l]}`)
}
// so instead of usually writing like the code above to run the array, you can instead use
for (let submit of subreddits) {
    console.log(`Visit reddit.com/r/ ${subreddits[submit]}`)
}
// instead you can write the for of like done above and it looks cleaners and simlier than the normal for loop
// for example
// here below i used the array methods and a for of to access square numbers
//  Here's an example of finding square numbers for this array. 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!
for (let squared of numbers) {
    console.log(`${squared * squared}`);
}
// using ${} method is important here, because anything within those gets evaluated in a calculation format
// Also using the for of loop here to print everything.

// Iterating/repeat over Onjects //
// Using the For...in Loops/ however it's not used as common as other loops these days for example:
const testScores = {
    Keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60,
}
// for (let person in testScores) {
//     console.log(`${person} scored: ${testScores[person]}`);
//     // if i just put person on the console.log(person) it will only return the names so if u want to return the value use `` method with ${} for example like done here
// can either do it like this above
// }
// Hwoever to iterates arrays you can also use the Object method to use for example here it would be 
Object.keys(testScores)
// and if you wanted to print out the key value only then u can also use
Object.values(testScores)
// or you can use entry which returns a nested array with all the keys values paired
Object.entries(testScores)

// so using this knowledge here we are tryign to print out all the values and adding them up so we can ge the average value;

let total = 0;
let scores = Object.values(testScores);
for (let scoring of scores) {
    total += score;
}
console.log(total / scores.length)

// So you can either use this preating over objects method or the previous method.