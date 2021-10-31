const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny')
app.use(() => {
    console.log("HEYYYYY!!!")
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