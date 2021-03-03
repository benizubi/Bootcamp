// we're connecting  to mongoDB and the default ports are 27017, 27018,27019 there's only up to 6 ports
const mongoose = require('mongoose');
// we're defining which database to use, here we're using movieApp database and if it doesnt exist, it will create one, or it will use it if it already exists.
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open!")
    })
    .catch(err => {
        console.log(log("OHno error!!!"))
        console.log(err)
    })
// 2. Schema is blueprint of  a mapping of different collections keys in mongoose to different types of js

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
// mongoose will take the movie part, it should always be capitalised and one word, then mangoose will create a collection for us called 'movies' changing it to lower case and plural.
// we usually call it the same name when saving it to a variable.
// 3. creating the model
const Movie = mongoose.model('Movie', movieSchema);
// now  after we've have created a collection called movies, then we can use movie to add things into our databse, like down below by calling new movies and passing on data.
// so amadeus is accessible through node and it will return the values in this, however it's not yet saved to mongodb 
// to save to Amadeus, in node you will have to call Amadeous.save() and that will store it in the db
// then 'use movieApp ' to switch to db movieapp and can be accessed through db.movies.find()
// save has to be called everytime we make changes so it can be stored in the collection. 
// const Amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

// on mongo its db.movie.insertMany to insert things, but in mongoose here it allow u to insert many like displayed below. 
// insert many is a model method that allow us to insert many things. same ways we would in mongodb
Movie.insertMany([
    { title: 'Beni', year: 1996, score: 9.2, rating: 'PG' },
    { title: 'Alex', year: 1986, score: 9.2, rating: 'R' },
    { title: 'The Iron Giant', year: 1989, score: 9.2, rating: 'R' },
    { title: 'Stand By ME', year: 1989, score: 9.2, rating: 'R' },
    { title: 'Moonsire Kingdom', year: 2018, score: 9.2, rating: 'R' }

    // uploading data like this takes time, so its always good to use callbacks to make sure it worked
    // so here we're returning if everything works fine.
    // .load index.js on this project directory in node will return all these with unique id numbers asigned to each.
])
    .then(data => {
        console.log("It Worked")
        console.log(data);
    })
// Find with mongoose
