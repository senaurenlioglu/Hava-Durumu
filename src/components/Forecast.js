import React from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

function Forecast({ data }) {
  const hourly = data.slice(0, 12); 
  const daily = [];

  for (let i = 0; i < data.length; i += 8) {
    daily.push(data[i]); // 5 günlük
  }

  return (
    <div className="forecast-section">
      <h3>Saatlik Tahmin</h3>
      <div className="forecast-row">
        {hourly.map((item, idx) => (
          <div key={idx} className="forecast-item">
            <p>{format(new Date(item.dt_txt), "HH:mm")}</p>
            <p>{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>

      <h3>5 Günlük Tahmin</h3>
      <div className="forecast-row">
        {daily.map((item, idx) => (
          <div key={idx} className="forecast-item">
            <p>{format(new Date(item.dt_txt), "EEEE", { locale: tr })}</p>
            <p>{Math.round(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
