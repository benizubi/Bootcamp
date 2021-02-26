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
// Schema is blueprint of  a mapping of different collections keys in mongoose to different types of js

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
// mongoose will take the movie part, it should always be capitalised and one word, then mangoose will create a collection for us called 'movies' changing it to lower case and plural.
// we usually call it the same name when saving it to a variable.

const Movie = mongoose.model('Movie', movieSchema);
// now  after we've have created a collection called movies, then we can use movie to add things into our databse, like down below by calling new movies and passing on data.
// so amadeus is accessible through node and it will return the values in this, however it's not yet saved to mongodb 
// to save to Amadeus, in node you will have to call Amadeous.save() and that will store it in the db
// then 'use movieApp ' to switch to db movieapp and can be accessed through db.movies.find()
// save has to be called everytime we make changes in no
const Amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

const blah = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })
blah.save()

Movie.insertMany([
    { title: 'Beni', year: 1986, score: 9.2, rating: 'R' },

    { title: 'Alex', year: 1986, score: 9.2, rating: 'R' },

    { title: 'The Iron Giant', year: 1986, score: 9.2, rating: 'R' }
])
