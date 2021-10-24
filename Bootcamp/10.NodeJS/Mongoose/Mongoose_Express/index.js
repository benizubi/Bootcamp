const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
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
const categories = ['fruit', 'vegetable', 'dairy'];
// usually if i wanted for the choice option to automatically display the correct category i could write the line below on the option ejs section, but instead going to create a loop.
//  <%= product.category === 'fruit' ? 'selected': '' %>
// i've attached categories on the new so we can use ejs to loop it.

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    // .find to find and collects everything on the db
    // console.log(products)
    res.render('products/index', { products })
    // here the second argument is where we pass the product object
    // This is where all the product will be listed. When using methods like find, we use async and await the product, then we call it back again after. like we've called it back on the second argument to pass all products.
})
//Creating //
app.get('/products/new', (req, res) => {
    //    products is the folder name 
    res.render('products/new', { categories })
    // by rendering, it allow us to then use ejs  here for page 'new' to create a form.
})
// here is where we're creating a new product from the form and storing it on the db
app.post('/products', async (req, res) => {
    // here i have created a new product and requesting its content
    const newProduct = new Product(req.body)
    // an order for the new product to be saved we calll it back like done here.
    await newProduct.save();
    // redirecting the page so we can 
    res.redirect(`/products/${newProduct._id}`)
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

// updating products //
app.get('/products/:id/edit', async (req, res) => {
    //    products is the folder name 
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', { product, categories })
    // by rendering, it allow us to then use ejs  here for page 'edit' to create a form.
})
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`)

})
// delete/ /
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedP = await Product.findByIdAndDelete(id)
    res.redirect('/products');
})
app.listen(8000, () => {
    console.log("App is listening on port 8000")
})