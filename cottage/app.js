const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Cottage = require('./models/cottage');
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/cottageApp')
.then(() =>{
    console.log("Mongoose connected successfully")
})
.catch((err)=>{
    console.log('Something went wrong!');
    console.log(err);
})



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

app.get('/',(req,res) => {
    res.render('home');
});

app.get('/cottages', async(req,res) => {
    const cottages = await Cottage.find({});
    res.render('cottages/index',{cottages})
});

app.get('/cottages/new', (req,res) => {
    res.render('cottages/new');
});



app.post('/cottages', async (req, res) => {
    const cottage = new Cottage(req.body.cottage);
    await cottage.save();
    res.redirect(`/cottages/${cottage.id}`)
})

app.get('/cottages/:id', async(req,res) => {
    const foundCottage = await Cottage.findById(req.params.id);
    res.render('cottages/show',{foundCottage});
});



app.get('/cottages/:id/edit', async(req,res) => {
    const foundCottage = await Cottage.findById(req.params.id);
    res.render('cottages/edit',{foundCottage})
});

app.put('/cottages/:id', async(req,res) => {
    const cottage = await Cottage.findByIdAndUpdate(req.params.id,{...req.body.cottage});
    res.redirect(`/cottages/${cottage.id}`);
})

app.delete('/cottages/:id', async(req,res) => {
    const cottage = await Cottage.findByIdAndDelete(req.params.id);
    res.redirect(`/cottages`);
})

app.listen(3000,()=>{
    console.log('Serving on the port 3000');
});
