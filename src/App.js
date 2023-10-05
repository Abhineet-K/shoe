import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/current-weather';
import { weather_api_url} from './api';
import { useState } from 'react';
import Forecast from './components/search/forecast/forecast';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY;
  

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    const forecastFetch = fetch(`${weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)

    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (respone) => {
        const weatherResponse = await respone[0].json();
        const forecastResponse = await respone[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforecast({ city: searchData.label, ...forecastResponse });
      }).catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchchange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data =  {forecast} />}
    </div>
  );
}

export default App;
