const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTrinagle = (a, b, c) => {
    return square(a) + square(b) === square(c)
};
isRightTrinagle(3, 5, 6)