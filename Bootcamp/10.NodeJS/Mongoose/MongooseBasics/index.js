// we're connecting  to mongoDB and the default ports are 27017, 27018,27019
const mongoose = require('mongoose');
// we're defining which database to use, here we're using movieApp database and if it doesnt exist, it will create one, or it will use it if it already exists.
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true });

// This prints this error when there's an error//
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});