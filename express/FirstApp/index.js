const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("we got a new request");
//     // res.send("Your response");
//     res.send("<h1>This is my Web Page !</h1)");
// })

app.get('/',(req,res) => {
res.send('This is the home page');
})

app.get('/cat',(req,res) => {
res.send('Meow!');
})

app.post('/cat',(req,res) => {
    res.send('This is different from send request');
})

app.get('/dog',(req,res) => {
res.send('Woof!');
})

app.get('/r/:sub',(req,res) => {
    const sub = (req.params);
    res.send(`<h1>Browsing for ${sub}.</h1>`);
    })

app.get('*',(req,res) => {
res.send(`I don't know the path`);
})


app.listen(3000, () => {
    console.log("Listening on port number 3000");
})