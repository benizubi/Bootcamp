const { PI, square } = require('./math')
const cats = require('./shelter')
// here we're requiring shelter, even though it's not a file, but it's a directory in this case
// by requiring shelter it's going to return everything that's i shelter.
// however in require we had to create a file called index, which basically stores all the info to print when we call shelter 
// console.log(PI)

// console.log(square(9))

console.log("require an entire directory!", cats)