
import './App.css';
import Welcome1 from './Welcome1';
import Greeting from './Greeting';
import Loginclass from './Loginclass1';
import Convertor from './Calconvertorfuncompo';
import CurrencyConverter from "./CurrencyConverter"

function App() 
{
  return (
    <div className="App">
      <h1>WELCOME FROM REACT</h1>
       {/* <Welcome1></Welcome1>
      <Greeting></Greeting>  */}
      {/* <Loginclass></Loginclass> */}
       {/* <Convertor></Convertor>  */}

       <CurrencyConverter></CurrencyConverter>
      
    </div>
  );
}

export default App;
