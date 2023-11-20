import React, { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'e8d4933b2a194d5847d1bce6f7c76a55';
  const city = 'New York'

  useEffect(() => {
    fetchWeatherData()
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather data: ' + error.message);
    }
  };

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
