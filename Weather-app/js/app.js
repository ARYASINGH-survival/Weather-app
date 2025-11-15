// Event listener for search button
document.getElementById('search-btn').addEventListener('click', function () {
    
    // Get the city entered by the user
    const city = document.getElementById('city-input').value.trim();

    // If input is empty
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    console.log("City entered:", city);

    // Display city name in UI (before adding real API)
    document.getElementById('city-name').textContent = "City: " + city;

    // Temporary sample data (this will be replaced by API data)
    document.getElementById('temperature').textContent = "Temperature: --°C";
    document.getElementById('weather-description').textContent = "Status: Loading...";

    // Later you will replace this with real weather API fetch
    // fetchWeatherData(city);
});
