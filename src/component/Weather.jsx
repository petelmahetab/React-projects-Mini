import React, { useState } from 'react';
import './weather.css';
// import BgColor from '.\src\component\BgCOlor.jpeg';

const api = {
  key: "5f323c5c765d9240be91e11b9ecfae8a",
  base: "https://api.openweathermap.org/data/2.5"
};

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          setWeather(result);
          setQuery('');
        })
        .catch(error => console.error('Error fetching the weather data:', error));
    }
  };

  const onChange = (e) => {
    if (e && e.target) {
      setQuery(e.target.value);
    }
  };

  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <main>
        <div className="search-bar">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
            value={query}
            onChange={onChange}
            onKeyPress={search}
          />
        </div>

        <div className='location-box'>
          {weather.main ? (
            <>
              <div className='location'>
                {weather.name}, {weather.sys?.country}
                <div className='date'>
                  {dateBuilder(new Date())}
                </div>
                <div className='weather-box'>
                  <div className='temp'>
                    {Math.round(weather.main.temp)}°C
                  </div>
                  <div className='weather'>
                    {weather.weather[0]?.main}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className='error'>Please enter a city name.</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Weather;
