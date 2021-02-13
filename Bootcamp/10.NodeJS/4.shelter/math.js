const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

// module.exports = "HELLO";
// so I have called this page on the next page but it doesn't return anything unless we include the module.exports, with a function, but here we're returning a string instead to test it 
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// exports.square = square;
// exports.add = add;
// exports.PI = PI;

// this is the short cut instead of writting modules too

// can either write it like this or do it seperately like done above.
const math = {
    add: add,
    PI: PI,
    square: square
}
module.exports = math;
