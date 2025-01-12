const express = require('express');
const app = express();
const morgan = require('morgan')    

app.use(morgan('tiny'));
app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path,req.requestTime);
    next();
})

app.use((req,res,next) => {
    const {password} = req.query;
    if(password === '123456'){
        next();
    }
    res.send(`Sorry you've entered wrong password`);
})

app.get('/',(req,res) => {
    console.log(`Requested time is ${req.requestTime}`)
    res.send('Home Page');
});

app.get('/about',(req,res) => {
    res.send('About Page');
});

app.get('/secret',(req,res) => {
    res.send('This is a secret');
});

app.use((req,res) => {
    res.send('Not Found!')
})

app.listen(3000,()=>{
    console.log('Serving on the port 3000');
});
