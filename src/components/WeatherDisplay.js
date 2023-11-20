import React from 'react';
import { useWeather } from '../context/WeatherContext';

function WeatherDisplay() {
  const weatherData = useWeather();

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
