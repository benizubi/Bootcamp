const { mode } = require("mathjs");

const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

module.exports = "HELLO";
// so I have called this page on the next page but it doesn't return anything unless we include the module.exports, with a function, but here we're returning a string instead to test it 
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

