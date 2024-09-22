const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then(() => {
    console.log("Connected");
})
.catch(err => {
   console.log("Oh no error.");
   console.log(err) ;
});

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

const Movie = mongoose.model('Movie',movieSchema);
// const beast = new Movie({title: 'BEAST',year: 2022,score:7.8,rating:'R'});
movieList = [{
    title: 'Beast',
    year: 2019,
    score: 7,
    rating: "R",
},
{
    title: 'Bigil',
    year: 2017,
    score: 8.2,
    rating: "UA",
},
{
    title: 'Master',
    year: 2020,
    score: 9,
    rating: "U",
},
{
    title: 'GOAT',
    year: 2024,
    score: 8.5,
    rating: "A",
},
{
    title: 'Mersal',
    year: 2017,
    score: 8,
    rating: "UA",
},]
// Movie.insertMany(movieList);