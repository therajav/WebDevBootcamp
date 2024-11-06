
const mongoose = require('mongoose');
const Cottage = require('../models/cottage');
const {places,descriptors} = require('./seedHelpers');
const cities = require('./cities');

mongoose.connect('mongodb://127.0.0.1:27017/cottageApp')
.then(() =>{
    console.log("Mongoose connected successfully")
})
.catch((err)=>{
    console.log('Something went wrong!');
    console.log(err);
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Cottage.deleteMany({});
    for (let i = 0; i<50 ; i++){
        const random1000 = Math.floor(Math.random()*1000);
        const cottage = new Cottage({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`
        });
        await cottage.save();

    }
} 

seedDB().then(() => {
    mongoose.connection.close();
    

    
    console.log('Connection Closed!')

})

