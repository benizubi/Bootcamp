const math = require('./Math');
// when reference a page we have to add the . so it adds it to this specific directory 
// here we've connecting the math page so it needs the key word require
console.log(math.PI);
console.log(math.square(9))
// Can either call it this way or the other method way if i only wanted to access pi and square i can call it in an object then reference it
 const {PI, square} = require('./Math');
console.log(square(9))
console.log(PI)

