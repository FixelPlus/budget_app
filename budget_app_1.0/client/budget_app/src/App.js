import './App.css';
import './Earned-and-spent.css';
import Top from './Top.js';
import Spendings from './Spendings.js';
import Earnings from './Earnings.js';
import Input_amount from './Input_amount.js';


function App() {
  return (
    <div className="App">
      <Top />
      <div className="Earned-and-spent">
      <Spendings />
      <Earnings />
      </div>
    </div>
  );
}

export default App;
