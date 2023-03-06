import './App.css';
import Header from './Components/Header';
import InputForm from './Components/InputForm';

// functional component
function App() {

  // onClick event handler for InputForm to submit user input
  function fetchData(city, stateCode, countryCode) {

    // test code: log arguments to console
    console.log(city + stateCode + countryCode);
  }

  return (
    <div className="App">
      <Header id='header' title='Weather App' />
      <InputForm fetchData={fetchData} />
    </div>
  );
}

export default App;
