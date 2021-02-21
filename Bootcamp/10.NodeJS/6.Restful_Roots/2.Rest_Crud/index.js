const express = require('express');
const app = express();
const path = require('path');
// path prvides utilities for working with file and directories path.


app.use(express.urlencoded({ extended: true }))
// this is a way of running some code on every single request
// especially for form data, it allows us to parse the text form data and decodes it. won't work for json and other types
app.use(express.json())
// this allows us to parse and decodes json data
app.set('views', path.join(__dirname, 'views'))
// the path join allows us access to view directory 
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Beni',
        comment: 'Lol, you kind of funny you know.'

    },
    {
        username: 'Exaucee',
        comment: 'Lol, you kind of funny exaucee.'

    },
    {
        username: 'Aaron',
        comment: 'Lol, you kind of funny aaron.'

    },
    {
        username: 'Eben',
        comment: 'Lol, you kind of funny eben.'

    }
];
app.get('/comments', (request, response) => {
    response.render('comments/index', { comments })
    // here we're passing on the array object of comments to display 
    // the /comment is used to display all comments
})
// here we're about to create new comments
app.get('/comments/new', (request, responde) => {
    responde.render('comments/new')
})

// we need this everytime we use ejs and i'll create the view directory for it
app.get('/tacos', (request, response) => {
    response.send('GET /tacos response')
    // here we're sending  a response to the server 
})
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    // these key objects are the names of the input fields
    res.send(`okay, here are your ${qty} ${meat}`)
})
app.listen(3000, () => {
    console.log("Running man located at port 3000!")
})