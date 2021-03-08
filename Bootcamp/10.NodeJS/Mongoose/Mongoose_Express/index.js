const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// here we're requring our product from the model folder
const Product = require('./models/product')
// the product here is what we're going to use everytime we want to list a product.name, product.id or anything. 

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    // shopApp is the name of the database we're going to use   
    .then(() => {
        console.log("Mongo Connection Open!")
        // usually our code can go here, but we don't need to nest all our code here 
    })
    .catch(err => {
        console.log(log("OH no error!!!"))
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/products', async (req, res) => {
    const products = await Product.find({})
    // .find to find and collects everything on the db
    // console.log(products)
    res.render('products/index', { products })
    // here the second argument is where we pass the product object
    // This is where all the product will be listed. When using methods like find, we use async and await the product, then we call it back again after. like we've called it back on the second argument to pass all products.
})

app.get('/products/:id', async (req, res) => {
    // req.params is requesting the params for this id
    const { id } = req.params;
    // to find the id we're using findbyid
    const foundProductId = await Product.findById(id);
    res.render('products/show', { foundProductId })
    // foundProductId is what we will use on the show.ejs page to print out individual things we're enquiring such as name, category and price. 
    // thus, the const name we set on here is then used to find things by id to allocate what we're after. 
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})