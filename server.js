const express = require("express");
const app = express();
const weather = require("weather")
const owm = weather();

const PORT = 5000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    
})

console.log("Listening port " + PORT);
app.listen(PORT);