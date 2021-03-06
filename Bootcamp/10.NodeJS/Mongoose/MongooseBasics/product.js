// 1. Connecting with mongoose
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
        console.log(log("OHno error!!!"))
        console.log(err)
    })
// Mongoose Schema Validtions //
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
            // the default is for the default number to start at that given number.
        }
    }
    // all schema types like required, default, min, maxlength and others can be found on mongoosejs.com schema types.
    // The other schema methods (used on index.js) automatically guesses the type because we ddin't set it, but nested objects here allow us to do such tasks. 
    // by doing this methods it creates a validation method because if i was to run this file without a name given, it will return an error because a name is required
    // Also if i use a string instead of number, it will also return an error because its requiring to have a number as it failed to retrive such info.
    // if we were to add on more new things that's not been set up here, it will not return an error, but it will  not store it in the database

})
const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Bike Helmet', price: 599, categories: ['Cycling', 'Safety'] });
bike.save()
    // this stores it to the mongo db by calling save
    .then(() => {
        console.log("It worked!")
        // usually our code can go here, but we don't need to nest all our code here 
    })
    .catch(err => {
        console.log(log("OHno error!!!"))
        console.log(err)
    })

//Validating Mongoose Updates //
// Validations applies automatically when something is being created, but when updating like doing so here,
// You need to use runvalidation if you want the validation to still be present.
// otherwise if u don't include it the validations will be ignored when updating.
Product.findOneAndUpdate({ name: 'Bike Helmet' }, { price: -10.99 }, { new: true, runValidators: true })

    .then(data => {
        console.log("It worked!")
        console.log(data)
    })
    .catch(err => {
        console.log(log("OHno error!!!"))
        console.log(err)
    })
