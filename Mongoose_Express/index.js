const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => {
    console.log("Mongo Connected");
})
.catch(err => {
   console.log("Oh no, Mongo connection error.");
   console.log(err) ;
});

app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');

app.get('/products',async (req,res) => {
    const products = await Product.find({});
    res.render('products/index',{products});
});

app.get('/products/:id', async (req,res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    console.log(foundProduct);
    res.render('products/show',{foundProduct})
})

app.listen(3000,() => {
    console.log("App is listening on port number 3000");
});

