const $input = $('#cityField');
const $submit = $('#search');
const $weatherElement = $('#weatherData');
const $icon = $('#weatherIcon')
const $error = $('#errorHandler')

//Hiding the HTML template before a search is made:
$weatherElement.hide();
$error.hide();

//Rendering the weather data on the page:
const renderWeather = (obj) => {
    $icon.removeClass();
try {
    $('#cityName').html(`${obj.name} ${obj.sys.country}`);
    $('#weatherType').html(`${obj.weather[0].description}`);
    $('#celsius').html(`${obj.main.temp} °C`);
    $('#wind').html(`${obj.wind.speed} m/s`);
    $('#humidity').html(`${obj.main.humidity} %`);
//Setting the correct icon to match the current weather:
    switch (obj.weather[0].main) {
        case 'Thunderstorm':
            $icon.addClass('fa-4x fas fa-bolt text-light mb-2');
            break;
        case 'Drizzle':
            $icon.addClass('fa-4x fas fa-cloud-showers-heavy text-light mb-2');
            break;
        case 'Rain':
            $icon.addClass('fa-4x fas fa-cloud-rain text-light mb-2');
            break;
        case 'Snow':
            $icon.addClass('fa-4x fas fa-snowflake text-light mb-2');
            break;
        case 'Mist':
            $icon.addClass('fa-4x fas fa-smog text-light mb-2');
            break;
        case 'Clear':
            $icon.addClass('fa-4x fas fa-sun text-light mb-2');
            break;
        case 'Clouds':
            $icon.addClass('fa-4x fas fa-cloud text-light mb-2');
            break;
        default:
            $icon.addClass('fa-4x fas fa-poo-storm text-light mb-2');   
    };
    $weatherElement.fadeIn(1200)
    }
catch (err) {
    $error.fadeIn(1200)
    }
};

 //Sending form submission to the server with POST request:
const executeSearch = () => {
    $weatherElement.hide();
    $error.hide();
    $.ajax({
        type: "POST",
        url: "/",
        data: $input.serialize(),
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: console.log("Data was sent to server!"),
        complete: (data) => {
            const weatherData = JSON.parse(data.responseText);
            console.log("Server responded!");
            console.log(weatherData);
            renderWeather(weatherData);
        }
      });
};

//Preventing 'enter' from refreshing the page when used to submit form:
$input.keypress(function(event) {
    if (event.keyCode == '13') {
        event.preventDefault()
        executeSearch();
    }
 });

//Listener for the button:
$submit.click(executeSearch);