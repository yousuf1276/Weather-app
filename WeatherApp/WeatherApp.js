function getWeather() {
    const apiKey = '6f577db4c7b97cee0626bb7e11151c80';
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please enter a valid city name.');
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                const weatherMessage = `Temperature: ${temperature}°C, Description: ${description}`;
                weatherInfo.innerText = weatherMessage;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred. Please try again.');
        });
}
