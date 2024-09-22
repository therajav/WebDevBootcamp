const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("Connected");
})
.catch(err => {
   console.log("Oh no error.");
   console.log(err) ;
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        min: [0,'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty:{
        online: {
            type: Number,
            default:0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S','M','L']
    }
});

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({},{onSale: true, price: 0})
}

productSchema.statics.findByCategory = function (category) {
    return this.findOne({categories:category})
}



const Product = mongoose.model('Product',productSchema);

// const bike = new Product({name: 'Jacket',price: 17,onSale: true, qty:{inStore: 8}, size: "L" });
// bike.save()
// .then(data => {
//     console.log("It worked");
//     console.log(data);
// })
// .catch(err => {
//     console.log('Something went wrong');
//     console.log(err);
// });

// Product.findOneAndUpdate({name: 'Tyre'},{price:-10},{new: true, runValidators: true})
// .then(data => {
//     console.log("It worked");
//     console.log(data);
// })
// .catch(err => {
//     console.log('Something went wrong');
//     console.log(err);
// });

// Product.findByCategory("Sport").then(res => console.log(res));

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Side Mirror'});
    console.log(foundProduct);
    // await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Accessories');
    console.log(foundProduct);

}

// findProduct();