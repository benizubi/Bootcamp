const mongoose = require('mongoose');

const Product = require('./models/product')
// after exporting products here we're calling the porduct file so we can use it.

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    // farmstand is the name of the database we're going to use   
    .then(() => {
        console.log("Mongo Connection Open!")
        // usually our code can go here, but we don't need to nest all our code here 
    })
    .catch(err => {
        console.log(log("OH no error!!!"))
        console.log(err)
    })
// created our first instance to store in the db
// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//         // to run the error. 
//     })
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'fruit'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Chocolate Whole',
        price: 2.69,
        category: 'dairy'
    },
]
// here we're inserting seedproducts in the product collection matching each object name, price and categories.
Product.insertMany(seedProducts)
    .then(c => {
        console.log(c)
    })
    .catch(e => { console.log(e) })