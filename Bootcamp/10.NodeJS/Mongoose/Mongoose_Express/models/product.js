//Creating our moddel 
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})
const Product = mongoose.model('Product', productSchema);
// by doing this, it allows us to export and use product on the seed page to create new product
module.exports = Product;
