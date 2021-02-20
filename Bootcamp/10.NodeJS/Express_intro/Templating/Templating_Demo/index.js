// Express 
const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// app.use(express.static('public'))
// app.use(express.static('css'))
// app.use(express.static('js'))
// I'm using public for all directory static serve, otherwise, i could of specified like done for jss and css
// the static allow us to do all the js and css stylingto display on the page from the public folder. 
app.use(express.static(path.join(__dirname, 'public')))
// the path join, allows me to access the stylesheet outside of where this file is located

app.set('view engine', 'ejs');
// the set always have two arguments and i downloaded the npm i ejs through terminal
// and it has been installed in the node_modules folder for us to use
// also downloaded the view folder with the ejs file



app.set('views', path.join(__dirname, '/views'))
// path.join takes multiple segments and joins them together into a single path 
// instead of running the code from the right directory, here we say instead run the file from where the index.js file directory is instead 

app.get('/', (request, response) => {
    response.render('home.ejs')
    // instead of the send method, we're using rendor here and it allows us to atach a ejs file to read on the browser
    // i dont have to list .ejs here before we've already listed ejs on the view engine.
    // an order for the ejs file to run, on the terminal you can only run it from the correct directory so that the it can detect the views folder 
    // otherwise it will return error message on the browser, although the server will still run
    // in order to run it outside of the correct directory, we can use path 
})

app.get('/cats', (request, response) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']
    // here we're pretending these values are coming from an array. 
    response.render('cats', { cats })
})
app.get('/r/:subreddit', (request, response) => {
    // here we're passing over the subreddit from the params
    const { subreddit } = request.params;
    const data = redditData[subreddit]
    // so we're printing the reddititData
    if (data) {
        response.render('subreddit', { ...data })
        // subreddit is the key we're passing its value to be returned to the web but before it passes it, it checks for the value of subreddit then passed through the ejs
    } else {
        response.render('nofFound', subreddit)
        // an error message if we cannot find the subreddit
    }
})

app.get('/rand', (require, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { randomguy: num })
    // here we passing the second argument so that the random number we made can then be passed on to be rendered 
    // randomguy ha been defined on the ejs file and here we just calling it.
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})