// script.js
const apiKey = 'YOUR_API_KEY'; // Replace with your API key from a weather service provider
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
});

function displayWeather(data) {
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.style.backgroundImage = `url(${iconUrl})`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
}
