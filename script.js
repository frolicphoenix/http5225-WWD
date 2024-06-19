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

const funnyForecasts = {
    "fog": "Expect a fog of mystery, with occasional whispers of secret spells.",
    "sunny": "Sunny, unless the invisible unicorns decide otherwise.",
    "light rain": "A light drizzle of lemonade to sweeten your day.",
    "thunderstorm": "Blustery winds powered by the sneezes of a thousand dragons.",
    "snow": "Snow likely, but only in shapes of various mythical creatures.",
    "rain": "Rainbow alert: Double arcs with pots of gold on both ends, tread carefully!",
    "clear": "Moonshine showers tonight, with glowing moonbeams after midnight.",
    "cloudy": "Watch for falling stars just before dawn. Make a wish!",
    "overcast": "Expect a mild breeze carrying echoes from a distant fairy gathering.",
    "mist": "Gentle rains, perfect for growing your enchanted garden.",
    "drizzle": "Beware of rogue clouds, they're in a mischievous mood today.",
    "haze": "Icy patches, slicker than a goblin's grin.",
    "storm": "Looming fog, thick enough to hide a horde of ghost pirates.",
    "wind": "Gusty winds carrying whispers of ancient tales.",
    "lightning": "Lightning that sketches ancient runes in the sky, decode wisely.",
    "sleet": "Flurries of feathers, as the angels above have a pillow fight.",
    "breeze": "Sudden gusts of laughter, may cause inexplicable joy.",
    "hail": "A torrent of lost socks expected to fall around noon.",
    "gale": "Aurora borealis, possibly visible from your backyard.",
    "tornado": "Expect a whisper of winter, followed by a shout of spring.",
    "heavy snow": "A blizzard of marshmallows, perfect for hot cocoa!",
    "scattered showers": "Sprinkles of joy falling here and there.",
    "freezing rain": "Icicles forming, ideal for a spontaneous ice sculpture contest.",
    "partly cloudy": "Halfway to sunshine, but still on the fence.",
    "dust storm": "A flurry of ancient scrolls and desert secrets.",
    "hot": "Blazing sun, don't forget your dragon-scale sunscreen.",
    "cold": "Chilly winds straight from the Snow Queen's castle.",
    "tropical storm": "Palms swaying to the beat of the island's song.",
    "hurricane": "Winds so fierce, they could blow a wizard off his broom.",
    "smoke": "Smoky skies, as if dragons are having a barbecue.",
    "squall": "A quick bout of pirate duels and mermaid splashes.",
    "frost": "A thin layer of fairy dust over everything.",
    "blizzard": "Snow falling so thick, you might find Narnia.",
    "heat wave": "Hot enough to cook eggs on your wizard staff.",
    "cold wave": "Cold enough to freeze time itself, almost.",
    "ice pellets": "Tiny shards of enchanted ice, sharp but magical.",
    "sandstorm": "Sands shifting like ancient runes in the wind.",
    "volcanic ash": "Ashes falling like phoenix feathers from above.",
    "dense fog": "Thicker than a potion gone wrong.",
    "smog": "A cloak of smog, concealing hidden treasures.",
    "tropical depression": "Mild rains and gentle winds, like a mermaid's sigh.",
    "cyclone": "A spinning vortex of fun and chaos.",
    "typhoon": "Furious winds carrying the whispers of the ocean.",
    "dust": "Dust bunnies taking over, tread lightly.",
    "ash": "Ashes to ashes, dust to mystical dust.",
    "meteors": "A shower of stardust and cosmic wonders.",
    "polar vortex": "Colder than the heart of an ice dragon.",
    "sun shower": "Sunshine with a sprinkle of fairy dust."
};

let weather = {
    "apikey": "3d6c8d17581d485fb3f04952241906",
    fetchWeather: function (city) {
        fetch("http://api.weatherapi.com/v1/current.json?key=" + this.apikey + "&q=" + city + "&aqi=no")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data.location;
        const { icon, text } = data.current.condition;
        const { temp_c, humidity } = data.current;
        const { wind_kph } = data.current;

        cityEl.innerText = `Weather in ${name}`;
        iconEl.src = icon;
        descriptionEl.innerText = text;
        temperatureEl.innerText = `Temperature: ${temp_c}°C`;
        humidityEl.innerText = `Humidity: ${humidity}%`;
        windEl.innerText = `Wind Speed: ${wind_kph} km/hr`;

        let funnyForecast = "A day like no other.";
        for (let key in funnyForecasts) {
            if (text.toLowerCase().includes(key)) {
                funnyForecast = funnyForecasts[key];
                break;
            }
        }
        funnyForecastEl.innerText = funnyForecast;

        weatherEl.classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(searchBar.value);
    }
};

searchEl.addEventListener("click", () => {
    weather.search();
});

searchBar.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Toronto");
