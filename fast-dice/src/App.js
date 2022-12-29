import logo from './logo.svg';
import './App.css';
import RollDisplay from './RollDisplay';
import { useState } from 'react';

function App() {

  const [roll, setroll] = useState(0)
  function clickHandler(e) {
    setroll(roll+1); // width: 100
}
  return (
    <div className="App" onClick={clickHandler}>
      {roll}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <RollDisplay />
      </header>
    </div>
  );
}

export default App;
