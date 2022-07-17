// Cities API
const API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const API_KEY = process.env.REACT_APP_X_RAPID_API_KEY;
const CITY_BASE_URL = `${API_URL}/cities`;

// Weather API
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

export {
  API_URL,
  API_KEY,
  CITY_BASE_URL,
  WEATHER_API_KEY,
  WEATHER_API_URL,
  FORECAST_API_URL,
};
