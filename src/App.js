import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import InputForm from './Components/InputForm';

// weather Icon imports
import ClearIcon from './assets/clear.png';
import CloudyIcon from './assets/cloudy.png';
import RainIcon from './assets/rain.png';
import ThunderStormIcon from './assets/thunderstorms.png';



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


  // function: select the proper image to describe the current weather
  function selectWeatherIcon(description) {

    // pick the image based on the description

    // if clear weather
    if(description.includes('clear')) {
      return ClearIcon;
    }
    // if rain weather
    else if(description.includes('rain') || description.includes('drizzle')) {
      return RainIcon;
    }
    // if thunderstorm weather
    else if(description.includes('thunderstorm')) {
      return ThunderStormIcon;
    }
    // if cloudy or snow
    else {
      return CloudyIcon;
    }
    

  }


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

    // destructure weather data
    const { temp, description,  high, low, feels_like  } = weatherData;

    // set image for weather description: make into a method
    let image = <img src = { selectWeatherIcon(description) } />

    return (
      <div className="App">
        <Header id='header' title='Weather App' />
        <InputForm fetchData={fetchData} />
        <div id='weather-data'>

          <div id='weather-icon'>
            {image}
          </div>

          <div id='main-temp'>
            <h2>{`${Math.round(temp)}°F`}</h2>
          </div>

          <div id='description-main'>
            <h3>{`${description}`}</h3>
          </div>
          
          <div id='range'>
            <h4>{`High: ${Math.round(high)}°F`}</h4>
            <h4>{`Low: ${Math.round(low)}°F`}</h4>
          </div>

          <h4>{`Feels Like: ${Math.round(feels_like)}°F`}</h4>

        </div>
      </div>
    );

  }
}

export default App;
