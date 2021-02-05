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


// WebAPIs & Single Threaded //
// browsers come with Apis that are able to handle cetain taks in the background, like making requests or setTimeOut
// At any given point in time, that single js thread is running at most one line of js code.
console.log("Sending request to server");
setTimeout(function () {
    console.log('Here is your data from the server...')
}, 3000)
// so if i ran this code, the first console will be printed then then last one then the 2 second because it takes 3 sec before displaying
// but instead of waiting for value to display, the api moved directly to the next line
console.log('Done now')

// Call Backs//
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 2000)
//     }, 2000)
// }, 1000)
// here i have done nested timeout call backs so first display red then yellow
// rewtritting as a function for mulitple purposesp.
const delayingColors = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}
delayingColors('red', 3000, () => {
    delayingColors('orange', 1000, () => {
        delayingColors('blue', 1000, () => {

        })
    })
})
