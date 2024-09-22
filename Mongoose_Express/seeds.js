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

// const p = new Product({
//     name: 'Ruby Great Fruit',
//     price: 1.99,
//     category: 'fruit'
// });

// p.save().then(p => {
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Potato',
        price: 40,
        category: 'vegetable' 
    },
    {
        name: 'Milk',
        price: 60,
        category: 'dairy' 
    },
    {
        name: 'Apple',
        price: 100,
        category: 'fruit' 
    },
    {
        name: 'Curd',
        price: 70,
        category: 'dairy' 
    },
    {
        name: 'Grapes',
        price: 50,
        category: 'fruit'
    },
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(err =>{
    console.log(err)
})