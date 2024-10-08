const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true}));

const categories = ['fruit','vegetable','dairy','baked goods'];

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
    const { category } = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('products/index',{products, category});
    }else{
        const products = await Product.find({});
    res.render('products/index',{products, category : 'All'});
    }
    
});



app.post('/products', async (req,res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/`);

})

app.get('/products/add', (req,res) => {
    res.render('products/new',{categories});
})

app.get('/products/:id', async (req,res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    // console.log(foundProduct);
    res.render('products/show',{foundProduct})
})

app.get('/products/:id/edit', async (req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit',{product, categories});
})

app.get('/products/:id/delete', async (req,res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id)
    console.log(`${product.name} is deleted successfully!`)
    res.redirect(`/products/`);
})

app.put('/products/:id', async (req,res) =>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators: true});
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req,res) => {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct)
    res.redirect('/products');
})

app.listen(3000,() => {
    console.log("App is listening on port number 3000");
});


