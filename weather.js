//Forming the request to OWM
const fetch = require('node-fetch');

const weather = async (city) => {
    const ROOT_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e32607f10c8c043c02c4f98e54dab8ff";
//node-fetch doesn't (apparently) automatically encode url so you need the "new URL"
    const myUrl = new URL(`${ROOT_URL}?q=${city}&APPID=${API_KEY}&units=metric`);
    const response = await fetch (myUrl);
    const json = await response.json()
    return json
};

module.exports = {
    weather : weather,
};