// Your JavaScript code here
// This is just a placeholder. Modify it as needed for your functionality.
let cityEl = document.querySelector(".city");
let iconEl = document.querySelector(".icon");
let descriptionEl = document.querySelector(".description");
let temperatureEl = document.querySelector(".temp");
let humidityEl = document.querySelector(".humidity");
let windEl = document.querySelector(".wind");
let searchBar = document.querySelector(".search-bar");
let searchEl = document.querySelector(".search button");
let weatherEl = document.querySelector(".weather");
let funnyForecastEl = document.querySelector(".funny-forecast");
let planetsEl = document.querySelector(".planets");

// Custom data for Star Wars planets
const starWarsPlanets = [
    { name: "Tatooine", weather: "Hot and dry, with twin suns blazing." },
    { name: "Hoth", weather: "Frozen tundra, with blizzards and ice caves." },
    // Add more planets here
];

// Function to display Star Wars planets
function displayPlanets() {
    planetsEl.innerHTML = "";
    starWarsPlanets.forEach(planet => {
        const planetDiv = document.createElement("div");
        planetDiv.classList.add("planet");
        planetDiv.innerHTML = `<h2>${planet.name}</h2><p>${planet.weather}</p>`;
        planetsEl.appendChild(planetDiv);
    });
}

// Example function to fetch weather data
function fetchWeather(city) {
    // This is just a placeholder for fetching weather data
    // Modify it with your actual weather API call
    setTimeout(() => {
        cityEl.innerText = `Weather in ${city}`;
        iconEl.src = "//cdn.weatherapi.com/weather/64x64/day/116.png";
        descriptionEl.innerText = "Sunny";
        temperatureEl.innerText = `Temperature: 25°C`;
        humidityEl.innerText = `Humidity: 50%`;
        windEl.innerText = `Wind Speed: 10 km/hr`;

        let funnyForecast = "A day like no other.";
        funnyForecastEl.innerText = funnyForecast;

        weatherEl.classList.remove("loading");
    }, 1000);
}

// Example event listeners for search functionality
searchEl.addEventListener("click", () => {
    fetchWeather(searchBar.value);
});

searchBar.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        fetchWeather(searchBar.value);
    }
});

// Display initial Star Wars planets
displayPlanets();
