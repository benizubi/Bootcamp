// 1. Connecting with mongoose
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

    // Mongoose Schema Validtions //