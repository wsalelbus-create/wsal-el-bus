// Weather Module for Bus Arrival Predictions
// Uses Open-Meteo API (free, no API key needed)

const ALGIERS_LAT = 36.7538;
const ALGIERS_LON = 3.0588;
const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${ALGIERS_LAT}&longitude=${ALGIERS_LON}&current_weather=true`;

// Weather delay factors
const WEATHER_DELAY_FACTORS = {
    clear: 1.0,           // Normal conditions
    partlyCloudy: 1.0,    // No impact
    cloudy: 1.0,          // No impact
    fog: 1.2,             // 20% slower
    drizzle: 1.15,        // 15% slower
    rain: 1.3,            // 30% slower
    heavyRain: 1.5,       // 50% slower
    thunderstorm: 1.6,    // 60% slower
    snow: 1.7,            // 70% slower (rare in Algiers)
    strongWind: 1.1       // 10% slower
};

// Current weather data (null until loaded)
let currentWeather = {
    condition: null,
    temperature: null,
    windSpeed: 0,
    delayFactor: 1.0,
    lastUpdate: null
};

// Fetch current weather
async function fetchWeather() {
    try {
        const response = await fetch(WEATHER_API_URL);
        const data = await response.json();

        const weather = data.current_weather;

        // Determine weather condition from WMO code
        const condition = getWeatherCondition(weather.weathercode);

        // Calculate delay factor
        let delayFactor = WEATHER_DELAY_FACTORS[condition] || 1.0;

        // Add wind impact (if wind > 30 km/h)
        if (weather.windspeed > 30) {
            delayFactor *= WEATHER_DELAY_FACTORS.strongWind;
        }

        currentWeather = {
            condition: condition,
            temperature: weather.temperature,
            windSpeed: weather.windspeed,
            delayFactor: delayFactor,
            lastUpdate: new Date()
        };

        console.log('🌤️ Weather updated:', currentWeather);
        return currentWeather;

    } catch (error) {
        console.error('Weather fetch failed:', error);
        // Fallback to normal conditions
        return currentWeather;
    }
}

// Convert WMO weather code to condition
function getWeatherCondition(code) {
    // WMO Weather interpretation codes
    if (code === 0) return 'clear';
    if (code === 1 || code === 2) return 'partlyCloudy';
    if (code === 3) return 'cloudy';
    if (code === 45 || code === 48) return 'fog';
    if (code === 51 || code === 53 || code === 55) return 'drizzle';
    if (code === 61 || code === 63) return 'rain';
    if (code === 65 || code === 67) return 'heavyRain';
    if (code >= 80 && code <= 82) return 'rain';
    if (code === 95 || code === 96 || code === 99) return 'thunderstorm';
    if (code >= 71 && code <= 77) return 'snow';

    return 'clear'; // Default
}

// Get weather emoji for display
function getWeatherEmoji(condition) {
    const emojis = {
        clear: '☀️',
        partlyCloudy: '⛅',
        cloudy: '☁️',
        fog: '🌫️',
        drizzle: '🌦️',
        rain: '🌧️',
        heavyRain: '⛈️',
        thunderstorm: '⚡',
        snow: '❄️',
        strongWind: '💨'
    };
    return emojis[condition] || '🌤️';
}

// Get current weather delay factor
function getWeatherDelayFactor() {
    return currentWeather.delayFactor;
}

// Get weather display info
function getWeatherDisplay() {
    if (!currentWeather.temperature) {
        return '🌤️ ...'; // Loading
    }
    const emoji = getWeatherEmoji(currentWeather.condition);
    const temp = Math.round(currentWeather.temperature);
    return `${emoji} ${temp}°C`;
}

// Initialize weather (fetch on load and every 10 minutes)
async function initWeather() {
    await fetchWeather(); // Wait for first fetch

    // Update display immediately
    const weatherDisplay = document.getElementById('weather-display');
    if (weatherDisplay) {
        weatherDisplay.textContent = getWeatherDisplay();
    }

    setInterval(async () => {
        await fetchWeather();
        if (weatherDisplay) {
            weatherDisplay.textContent = getWeatherDisplay();
        }
    }, 10 * 60 * 1000); // Update every 10 minutes
}

// Export functions
window.WeatherModule = {
    init: initWeather,
    getDelayFactor: getWeatherDelayFactor,
    getDisplay: getWeatherDisplay,
    getCurrentWeather: () => currentWeather
};
