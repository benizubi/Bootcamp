const express = require("express");
const app = express();
const morgan = require('morgan');


// when using morgan to pass informtation to the server, it returns a log of the information we're passing and printing it on the server.
// .use is telling the app to use function on the server everytime we make a request
// when using morgan everytime you make a request, it records the log and moves onto the next request u make
// morgan is a useful login tool.

// app.use(morgan('common'))

// app.use((req, res, next) => {
//     console.log("This is my first middleware!!!")
//     // We need to use next so that it moves on to the second middleware how it does with morgan,
//     // if i remove next() it will log on the server but doesnt move onto the next call 
//     return next();
//     // so after calling next, it's going to move onto the next middleware and will only log this after going through all middleware.
//     // return next(); just makes sure nothing happens after next();
//     console.log("This is my first middleware after calling next")


// })
// app.use((req, res, next) => {
//     console.log("This is my second middleware!!!")
//     return next();

// })
// app.use((req, res, next) => {
//     console.log("This is my third middleware!!!")
//     return next();
// })
app.use(morgan('tiny'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})
// new middleware
// this is just how to make a simple middleware
app.use(('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!!")
    next();
}))
// password middleware demo
const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('Sorry you need a password!!!')
})







app.get('/', (req, res) => {
    console.log(`REQUEST DATE:  ${req.requestTime}`)
    res.send('HOME PAGE!')
})
// I have added a middleware for /dogs route so the last request will only run if the verifypassword is sucessful
app.get('/dogs', verifyPassword, (req, res) => {
    console.log(`REQUEST DATE:  ${req.requestTime}`)
    res.send('WOOF WOOF!')
})
// // If i run the code bellow here instead of next to morgan, the code will return undefined because it first run the first two servers. Thus, 
// // app.use((req, res, next) => {
// //     req.requestTime = Date.now();
// //     console.log(req.method, req.path);
// //     next();
// // })
// The 404 is what is rendered if nothing else is found from the routers
// 404 is the status code for errors fix 

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My secret is: sometimes I wear headphones in public so I dont have to talk to any')
})
// verify password has the next middelware and will return the next call if sucessful or else it will stop on the vierfypassword.

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})