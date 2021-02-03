// THE CALL STACK
// is the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
// Hwo JS knows which function is currently being run and what functions are called from within that function, etc..

// we add things on top of the stacks, not bottom, and also we remove something we remove from the top not the bottom
const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTrinagle = (a, b, c) => {
    return square(a) + square(b) === square(c)
};
isRightTrinagle(3, 5, 6)
// so here thee stack is first going to figure out the solution for a then b then c
// so for square it still stac kthe square  value, then mulitply be done an order to return the value, then off muliply of the stack, then tak square of the stack, then same thing for all and will return true or false
