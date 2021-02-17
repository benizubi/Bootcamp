// Express 
const express = require('express');
const app = express();
const path = require('path');
// the path


app.set('view engine', 'ejs');
// the set always have two arguments and i downloaded the npm i ejs through terminal
// and it has been installed in the node_modules folder for us to use
// also downloaded the view folder with the ejs file

app.get('/', (request, response) => {
    response.render('home.ejs')
    // instead of the send method, we're using rendor here and it allows us to atach a ejs file to read on the browser
    // i dont have to list .ejs here before we've already listed ejs on the view engine.
    // an order for the ejs file to run, on the terminal you can only run it from the correct directory so that the it can detect the views folder 
    // otherwise it will return error message on the browser, although the server will still run
    // in order to run it outside of the correct directory, we can use path 
    app.set('views', path.join(__dirname, '/views'))
    // path.join takes multiple segments and joins them together into a single path 
    // instead of running the code from the right directory, here we say instead run the file from where the index.js file directory is instead 
})



app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})