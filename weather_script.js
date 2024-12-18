const apiKey = '2429767bd5fc00a87e549098c9ef82c0'; // Replace with your OpenWeather API key

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityName').value;
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = '<p>Loading...</p>';
    const weatherData = await getWeather(city);
    displayWeather(weatherData);
});

function displayWeather(data) {
    if (data.cod === 200) {
        document.getElementById('weatherResult').innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
    }
}