import './App.css';
import Navbar from './components/Header';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WeatherDisplay/>
    </div>
  );
}

export default App;
