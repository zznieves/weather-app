import './App.css';
import Header from './Components/Header';
import InputForm from './Components/InputForm';

// functional component
function App() {
  return (
    <div className="App">
      <Header id='header' title='Weather App' />
      <InputForm />
    </div>
  );
}

export default App;
