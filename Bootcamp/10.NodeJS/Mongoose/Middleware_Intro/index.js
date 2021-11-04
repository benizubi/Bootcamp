const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'))
// when using morgan to pass informtation to the server, it returns a log of the information we're passing and printing it on the server.
// .use is telling the app to use function on the server everytime we make a request




app.get('/', (req, res) => {
    res.send('Home Page!')
})
app.get('/dogs', (req, res) => {
    res.send('woof woooof!')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})