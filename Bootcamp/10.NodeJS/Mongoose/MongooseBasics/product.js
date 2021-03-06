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
        min: [0, 'Error Try again, price must be positive']
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
        },
        size: {
            type: String,
            enum: ['XS', 'S', 'M', 'L']
            // for the enum error validation, this checks for all the listed item in the array, if anything not listed here is noted when creating, it will return an error message for instance if i  used XSS instead of the listed items.
        }
    }
    // all schema types like required, default, min, maxlength and others can be found on mongoosejs.com schema types.
    // The other schema methods (used on index.js) automatically guesses the type because we ddin't set it, but nested objects here allow us to do such tasks. 
    // by doing this methods it creates a validation method because if i was to run this file without a name given, it will return an error because a name is required
    // Also if i use a string instead of number, it will also return an error because its requiring to have a number as it failed to retrive such info.
    // if we were to add on more new things that's not been set up here, it will not return an error, but it will  not store it in the database

})

// const Product = mongoose.model('Product', productSchema);

// const bike = new Product({ name: 'Bike Helmet', price: 599, categories: ['Cycling'], size: 'M' });
// bike.save()
//     // this stores it to the mongo db by calling save
//     .then(() => {
//         console.log("It worked!")
//         // usually our code can go here, but we don't need to nest all our code here 
//     })
//     .catch(err => {
//         console.log(log("OHno error!!!"))
//         console.log(err)
//     })

//Validating Mongoose Updates //
// Validations applies automatically when something is being created, but when updating like doing so here,
// You need to use runvalidation if you want the validation to still be present.
// otherwise if u don't include it the validations will be ignored when updating.
// Product.findOneAndUpdate({ name: 'Bike Helmet' }, { price: -10.99 }, { new: true, runValidators: true })

//     .then(data => {
//         console.log("It worked!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(log("OHno error!!!"))
//         console.log(err)
//     })

// Mongoose Validation Error  //
// if you're using objects and have an array listed like done on min, the first argument is for the min number and the second argument works as an error message like displayed for the price object.
// price: {
//     type: Number,
//     required: true,
//     min: [0, 'Error Try again, price must be positive']
// },

// Model instance methods //
// the greet method can be used in node to display this function everytime we call it.
// Also we're using the function () instead of the => because it binds and prevents us from using ' .this' when using the arrow.
productSchema.methods.greet = function () {
    console.log("OH HI THERE!")
    // the value of this will change if we use arrow function, whereas using the function returns a partucular instance method for a product, but if we use an arroa function we wont have that value.
    console.log(`- from ${this.name}`)
}

// the ending here can be set to anything liek we used toggleOnSale
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    // this means onsale = true because it was previously set to false and ! does the opposite. 
    return this.save();
}

productSchema.methods.addCategories = function (newcat) {
    this.categories.push(newcat);
    // using push to add it to the array
    return this.save();
    // we always have to call the .save() an order to save this instance

}

// const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helemt' })
    foundProduct.greet();
    // here printing out the product along with toggleonsale
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    // every time we call save, its an async method that takes time to save so we can await it here
    console.log(foundProduct)
    // so here the first console returns the default product which was set to be false, then it awaits with the toggleonSale and now after we call it, it returns the true version because on toggle we've set it to be true

    // here is where we push the data into the array so 'outdoors'  is what's being pushed. to create a new category called outdoors.
    await foundProduct.addCategories('Outdoors')
    console.log(foundProduct)

    // The await method is used along on async methods and it allow us to wait until its finished executing before being succesfull or returning an error before moving on.

}
// findProduct();

// so here we've basically created a find object to find one thing and also console log to find one product and then print the greeting message from the greeting function. the greeting used here is greet, but we can name it anything we wantand everytime we call it, it will load the message up
// Everytime we call greet, it will always print out what's listed in the greet block.

// Adding Model statics methods //
// This updates all product with a price of 0

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}
// this models code always has to be in the middle  like here hence why i keep repeating it everywhere.
const Product = mongoose.model('Product', productSchema);

// this updates all of them and return us with the how many things got modified. 
Product.fireSale().then(res => console.log(res))