import './App.css';
import Header from './Components/Header';
import InputForm from './Components/InputForm';

// functional component
function App() {

  // onClick event handler for InputForm to submit user input
  function fetchData(city, stateCode, countryCode) {

    // test code: log arguments to console
    console.log(city + stateCode + countryCode);

    // pass arguments to fetch the city's latitude and longitude
    getCoordinates(city, stateCode, countryCode);

  }

  // fetch latitude and longitude
  async function getCoordinates(city, stateCode, countryCode) {

    // endpoint
    let endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=1&appid=5161d459aa5061baac3692c659a4a040`;

    const response = await fetch(endpoint);
    const data = await response.json();

    // test code: log JSON data to console
    console.log(`
    Latitude: ${data[0].lat}
    Longitude: ${data[0].lon}
    `);
  }

  return (
    <div className="App">
      <Header id='header' title='Weather App' />
      <InputForm fetchData={fetchData} />
    </div>
  );
}

export default App;
