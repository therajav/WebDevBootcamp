const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/tacos',(req,res) => {
    res.send('GET /tacos respose')
});

app.post('/tacos',(req,res) => {
    console.log(req.body);
    res.send('POST /tacos respose')
});



app.listen(3000,() => {
    console.log("Started on port 3000")
})