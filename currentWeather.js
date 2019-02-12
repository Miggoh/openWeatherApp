const ROOT_URL = "api.openweathermap.org/data/2.5/weather"
const API_KEY = "e32607f10c8c043c02c4f98e54dab8ff"
fetch(`${ROOT_URL}?q=${SEARCH}&APPID=${API_KEY}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
fetch("http://localhost:5000/getData")
    .then((res) => res.json())
    .then((res) => console.log(res));