import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";

const API_KEY = ""; 

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
      );
      setWeatherData(res.data);
    } catch (err) {
      alert("Şehir bulunamadı!");
    }
  };

  const getBackgroundClass = () => {
    if (!weatherData) return "default";
    const main = weatherData.list[0].weather[0].main.toLowerCase();

    if (main.includes("cloud")) return "cloudy";
    if (main.includes("rain")) return "rainy";
    if (main.includes("clear")) return "sunny";
    if (main.includes("snow")) return "snowy";
    return "default";
  };

  return (
    <div className={`app ${getBackgroundClass()}`}>
      <div className="search">
        <input
          type="text"
          value={city}
          placeholder="Şehir girin..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Ara</button>
      </div>

      {weatherData && (
        <>
          <WeatherDisplay data={weatherData.list[0]} city={weatherData.city.name} />
          <Forecast data={weatherData.list} />
        </>
      )}
    </div>
  );
}

export default App;
