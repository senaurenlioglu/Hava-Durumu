import React from "react";
import { WiDaySunny, WiRain, WiCloudy, WiSnow } from "weather-icons-react";

const getIcon = (main) => {
  switch (main.toLowerCase()) {
    case "clear":
      return <WiDaySunny size={64} color="#f1c40f" />;
    case "rain":
      return <WiRain size={64} color="#3498db" />;
    case "clouds":
      return <WiCloudy size={64} color="#95a5a6" />;
    case "snow":
      return <WiSnow size={64} color="#ecf0f1" />;
    default:
      return <WiCloudy size={64} />;
  }
};

function WeatherDisplay({ data, city }) {
  const main = data.weather[0].main;

  return (
    <div className="current-weather">
      <h2>{city}</h2>
      {getIcon(main)}
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
