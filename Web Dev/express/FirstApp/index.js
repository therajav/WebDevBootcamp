const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("we got a new request");
    // res.send("Your response");
    res.send("<h1>This is my Web Page !</h1)");
})
app.listen(3000, () => {
    console.log("Listening on port number 3000")
})