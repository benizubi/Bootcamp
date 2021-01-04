let colors = ['rad', 'orange', 'yallow'];
// above here we have created an array called colors and if we want to change the content on that array
// you can this this method below.

colors[0] = 'red';
colors[2] = 'Yellow';
// so here i wanted to change the color from rad to red and access using 0 beccause that's the first indexed value

// You can add on to the existing area for example colors[10] = indigo is one way to perfrom that
colors[10] = 'indigo';
// because there was only 3 options value for colors 10th will place the value to the 10th indexed so
// because from 4-9 we haven't specified what they are, they become empty strings with undefined output.

// Push
// you can also add elements using the push methods for a single item or multiple, for example:
colors.push('black', 'white');
// so what's happening here is the push function will be added to the ending of the array following the order and expanding the array content

// Pop
// Pop basically removes the last character from the array and it returns the last element in the array.
colors.pop();

// Shift
// shift is like pop, but it insteads removes the first line in the array and returns the value back for example:
colors.shift()

// Unshift
// Unshift behaves like a push, but instead it adds to the start for example:
colors.unshift('VIP')

// Concat is used to merge one or more arrays for example:
let dogs = ['rusty', 'musty', 'meat'];
let totalstuff = colors.concat(dogs)
console.log(totalstuff);
// console log will then print out what's in color first, then dogs as one array.

// indeOf(rusty) is basically asking in the array what's the index number for rusty here it's 0 For example:
let rustyN = indexOf('rusty');
console.log(rusty)

// Slice
// Slice basically creates a copy of the same array and stores to another array if you use just the .slice() method
// However if you do something like dogs.slice(1) = its going to give you elements from the index number u chose
// here we chose 1 so it will start from 1 to the end returning you
// ['musty','meat'] only but we can also select where we want it to end so (0,3) means 0 start 3 where to end
let Ndogs = dogs.slice(1);
console.log(Ndogs)

// Array + Const
// You can use const for arrays as long as the reference remains the same for example:
const myEggs = ['brown', 'brown'];