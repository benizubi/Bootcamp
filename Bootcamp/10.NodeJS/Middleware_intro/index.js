const express = require("express");
const app = express();
const morgan = require('morgan');


// when using morgan to pass informtation to the server, it returns a log of the information we're passing and printing it on the server.
// .use is telling the app to use function on the server everytime we make a request
// when using morgan everytime you make a request, it records the log and moves onto the next request u make
// morgan is a useful login tool.

app.use(morgan('dev'))
app.use((req, res, next) => {
    console.log("This is my first middleware!!!")
    // We need to use next so that it moves on to the second middleware how it does with morgan,
    // if i remove next() it will log on the server but doesnt move onto the next call 
    next();
    // so after calling next, it's going to move onto the next middleware and will only log this after going through all middleware.
    console.log("This is my first middleware after calling next")


})
app.use((req, res, next) => {
    console.log("This is my second middleware!!!")
    next();

})


app.get('/', (req, res) => {
    res.send('Home Page!')
})
app.get('/dogs', (req, res) => {
    res.send('woof woooof!')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})