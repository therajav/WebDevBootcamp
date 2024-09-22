const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("Connected");
})
.catch(err => {
   console.log("Oh no error.");
   console.log(err) ;
});

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

const Person = mongoose.model('Person',personSchema);

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
});


