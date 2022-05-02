import logo from './logo.svg';
import './App.css';
import {HelloComponent} from './components/Hello';
import {ClockComponent} from './components/clock';

function App() {
  return (
    <div className="App">
      
      <ClockComponent></ClockComponent>
    </div>
  );
}

export default App;

//<HelloComponent firstName = {565} lastName = "suraj"></HelloComponent>