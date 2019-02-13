const express = require("express");
const app = express();
const weather = require("./weather").weather;
const bodyParser = require("body-parser");

const PORT = 5000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    let clientInput = JSON.parse(JSON.stringify(req.body));
    const city = Object.keys(clientInput)[0];
    weather(city);
})

console.log("Listening port " + PORT);
app.listen(PORT);

