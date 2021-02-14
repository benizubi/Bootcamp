const { response, request } = require("express");
const express = require("express");
// we always have to require express framework for us to use after installing the npm files
const app = express();

// app.use(()=>{
//     // this code runs everytime we get a new request
//     console.log("we got a new request boy")
// })
// // everytime i go on http://localhost:8080/ everytime i refresh the page the use message will print out
// // meaning we're connected to our server
// app.listen(8080, ()=>{
//     // this connnects us to the local host server 8080 this time, can alo use like 30000, its the traffic for my system.
//     console.log("listening on port 8080!")
//     // this just prints when the server starts 
// })
// listen basically means when u run node on terminal it's going to be listening and waiting to execute the code

// app.use((request, response) => {
//     // we also need a reuqest and response, express has already created for us and we just have to call 2 arguments
//     console.log("we got a new request boy")
//     response.send('<button>Click me </button>')
//     // response. send is versitle, u cn even return <h1>hi</h1> and it will render it as an h1
//     // response.send("I LOVE YOU ")
//     // response.send is going to actually generate and sends a request 
// })
app.get('/', (request, response) => {
    response.send('Welcome Home boy!')
})
app.get('/r/:subreddit', (request, response) => {
    const { subreddit } = request.params;
    response.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
// http://localhost:8080/r/dogs/123 so that will print dog as subreddit and id of 123
app.get('/r/:subreddit/:postId', (request, response) => {
    const { subreddit, postId } = request.params;
    // for params we have to request the params so whatever we will be typing on localhost: to search 

    response.send(`<h1>Browsing the ${subreddit} subreddit with an id of ${postId}</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!! THIS')

})
// the routing is basically allow us to change the state of the application to perform different things like /cats and dogs will return different outcome based on the one u search
app.get('/cats', (request, response) => {
    response.send('MEOW!!')
})
// Post request is slightly different 
app.get('/dogs', (request, response) => {
    response.send('WOOF!')
})
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})
// this * is for all and should only be added on the bottom if i place this at the top, the send response will be ignored 
// here we're printing that if the path is not the one we listed.

// working with Query Strings //
app.get('/search', (request, response) => {
    console.log(request.query)
    response.send('HI!')
})

app.listen(8080, () => {
    console.log("listening on port 8080!")
})
