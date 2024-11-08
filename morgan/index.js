const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'));
app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path,req.requestTime);
    next();
})

app.get('/',(req,res) => {
    console.log(`Requested time is ${req.requestTime}`)
    res.send('Home Page');
});

app.get('/about',(req,res) => {
    res.send('About Page');
});

app.use((req,res) => {
    res.send('Not Found!')
})

app.listen(3000,()=>{
    console.log('Serving on the port 3000');
});
