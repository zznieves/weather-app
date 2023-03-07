import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import InputForm from './Components/InputForm';

// functional component
function App() {

  // state-property: coordinates (latitude and longitude)
  const [ coordinates, setCoordinates ] = useState(null);
  const [ weatherData, setWeatherData ] = useState(null);

  // onClick event handler for InputForm to submit user input
  function fetchData(city, stateCode, countryCode) {

    // Capitalize first letter of city
    city = city[0].toUpperCase() + city.slice(1);

    // pass arguments to fetch the city's latitude and longitude
    getCoordinates(city, stateCode, countryCode);

  }

  // fetch latitude and longitude
  async function getCoordinates(city, stateCode, countryCode) {

    // endpoint: call to OpenWeatherMap Geocoding API
    let endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=1&appid=5161d459aa5061baac3692c659a4a040`;

    const response = await fetch(endpoint);
    const data = await response.json();

    // store required parameters as a state-property
    setCoordinates({
      latitude: data[0].lat,
      longitude: data[0].lon
    });

  }

  // fetch weather data after obtaining latitude and longitude
  async function getWeatherData(lat, lon) {

    // endpoint: call to OpenWeatherMap current weather data API
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=5161d459aa5061baac3692c659a4a040`;

    const response = await fetch(endpoint);
    const data = await response.json();

    // store response data in the state
    setWeatherData({
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      low: data.main.temp_min,
      high: data.main.temp_max,
      description: data.weather[0].description,

    });


  }

  // useEffect Hook: call everytime the given value(s) in the dependency array change
  useEffect(() => {
    // test code: only print the state-property if it has updated
    if(coordinates === null) {

      return
    }
    else{

    getWeatherData(coordinates.latitude, coordinates.longitude);
    }
  }, [coordinates]);


  // conditional rendering: if we have weather data, display it in the browser
  if(weatherData === null) {

    return (
      <div className="App">
        <Header id='header' title='Weather App' />
        <InputForm fetchData={fetchData} />
      </div>
    );
  }
  else {

    return (
      <div className="App">
        <Header id='header' title='Weather App' />
        <InputForm fetchData={fetchData} />
        <div id='weather-data'>
          <p>{`Temperature: ${Math.round(weatherData.temp)}°F`}</p>
          <p>{`Low: ${Math.round(weatherData.low)}°F`}</p>
          <p>{`High: ${Math.round(weatherData.high)}°F`}</p>
          <p>{`Feels Like: ${Math.round(weatherData.feels_like)}°F`}</p>
          <p>{`Description: ${weatherData.description}`}</p>

        </div>
      </div>
    );

  }
}

export default App;
