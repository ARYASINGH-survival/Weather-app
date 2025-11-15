// Event Listener for Search Button
document.getElementById('search-btn').addEventListener('click', function () {
    const city = document.getElementById('city-input').value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    // Call the fetch function with the entered city
    fetchWeatherData(city);
});

// Function to fetch weather data from the API
async function fetchWeatherData(city) {
    const apiKey = "0af4defbc506aa5de9b7c2194f54e49d";  // <-- Replace with your real API key

    // Weather API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log("Weather data:", data);

        // If city is invalid
        if (data.cod == "404") {
            alert("City not found! Please enter a valid city.");
            return;
        }

        // Update DOM elements with data
        document.getElementById("city-name").textContent = "City: " + data.name;
        document.getElementById("temperature").textContent = "Temperature: " + data.main.temp + "°C";
        document.getElementById("weather-description").textContent =
            "Description: " + data.weather[0].description;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Unable to fetch weather data. Check your internet connection.");
    }
}
