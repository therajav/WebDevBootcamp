const express = require("express");
const app = express();

app.all(() => {
    console.log("Got a new request");
});

app.get('/:animal',(req,res) =>{
    const {animal} = req.params;
    res.send(`<H1>Got a new req for ${animal}</H1>`);
    
})

app.listen(3000, () => {
    console.log("Listening");
})

