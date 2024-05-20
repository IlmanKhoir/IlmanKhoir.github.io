import React, { useState } from "react";
import "../assets/css/weather.css";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (city.trim() !== "") {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        setWeatherData(null);
        setError(error.message);
      }
    } else {
      setError("Please enter a city");
    }
  };

  const getWeatherData = async (city) => {
    const apiKey = "a41f1ad32e8f59ec9485a70e27be231c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  };

  const getWeatherEmoji = (weatherId) => {
    // Your weather emoji logic here
  };

  return (
    <div className="weather-background d-flex flex-column justify-content-center align-items-center">
      <form className="weatherForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cityInput"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get weather</button>
      </form>

      <div className="card w-25 mb-4" style={{ display: weatherData || error ? "flex" : "none" }}>
        {weatherData && (
          <>
            <h1 className="cityDisplay text-center">{weatherData.name}</h1>
            <p className="tempDisplay">{(weatherData.main.temp - 275.15).toFixed(1)}°C</p>
            <p className="humidityDisplay">Humidity: {weatherData.main.humidity}%</p>
            <p className="descDisplay">{weatherData.weather[0].description}</p>
            <p className="weatherEmoji">{getWeatherEmoji(weatherData.weather[0].id)}</p>
          </>
        )}

        {error && <p className="errorDisplay">{error}</p>}
      </div>
    </div>
  );
}
