const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'))
// when using morgan to pass informtation to the server, it returns a log of the information we're passing and printingit on the server.





app.get('/', (req, res) => {
    res.send('Home Page!')
})
app.get('/dogs', (req, res) => {
    res.send('woof woooof!')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})