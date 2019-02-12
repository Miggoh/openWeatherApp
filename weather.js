const ROOT_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e32607f10c8c043c02c4f98e54dab8ff";
            
//Request to OWM
const weather = (city) => {
    fetch(`${ROOT_URL}?q=${city}&APPID=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

module.exports.weather = weather;