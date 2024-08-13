const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is funny'
    },
    {
        username: 'Skyler',
        comment: 'That is good'
    },
    {
        username: 'Robby',
        comment: 'Hahaha'
    },
    {
        username: 'Tom',
        comment: 'Hello all'
    },
]

app.get('/comments',(req,res) => {
    res.render('comments/index',{comments});
});

app.get('/comments/new',(req,res) => {
    res.render('comments/new',{comments});
});

app.post('/comments',(req,res) => {
    const {username, comment} = req.body;
    comments.push({username,comment});
    console.log(req.body);
    res.send("It worked!");
});

app.get('/tacos',(req,res) => {
    res.send('GET /tacos respose');
});

app.post('/tacos',(req,res) => {
    console.log(req.body);
    res.send('POST /tacos respose');
});

app.listen(3000,() => {
    console.log("Started on port 3000");
})

