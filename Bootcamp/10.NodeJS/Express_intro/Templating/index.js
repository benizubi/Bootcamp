// Express 
const express = require('express');
const app = express();


app.set('view engine', 'ejs');
// the set always have two arguments and i downloaded the npm i ejs through terminal
// and it has been installed in the node_modules folder for us to use
// also downloaded the view folder with the ejs file

app.get('/', (request, response) => {
    response.send("HI")

})



app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})