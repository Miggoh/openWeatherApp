const express = require("express");
const app = express();
const weather = require("./weather").weather;
const bodyParser = require("body-parser");

const PORT = 5000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", async (req, res) => {
    const city = req.body.city;
    //console.log(city);
    let weatherData = await weather(city);
    //console.log(weatherData);
    await res.send(weatherData);
})

console.log("Listening port " + PORT);
app.listen(PORT);

