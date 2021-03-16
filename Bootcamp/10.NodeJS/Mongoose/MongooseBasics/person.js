// we're connecting  to mongoDB and the default ports are 27017, 27018,27019 there's only up to 6 ports
const mongoose = require('mongoose');
// we're defining which database to use, here we're using movieApp database and if it doesnt exist, it will create one, or it will use it if it already exists.
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    // shopApp is the name of the database we're going to use   
    .then(() => {
        console.log("Connection Open!")
        // usually our code can go here, but we don't need to nest all our code here 
    })
    .catch(err => {
        console.log(log("OHn no there's error!!!"))
        console.log(err)
    })
//3. Mongoose Virtuals //
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})
personSchema.virtual('fullName').get(function () {
    // this is a virtuals 
    // we use get or set methods for this instance, we're using get to collect first and last name.
    // on node there's no property to get full name but because we set it here we can use it to view the full name
    // so if i create person called beni and i want to get the full name i can use Beni.fullName
    // samething can also be done for setters with virtuals 
    return `${this.first} ${this.last}`
})
//middleware //
// this allow us to run things before and after hence the term pre and post
personSchema.pre('save', async function () {
    console.log("About to Save!!")
    // so when we're using the save method it will say about to save
})

personSchema.post('save', async function () {
    console.log("Just Saved!!")
    // so when we're using the save method it will say just saved to show us its saved all. 
})
const Person = mongoose.model('Person', personSchema);