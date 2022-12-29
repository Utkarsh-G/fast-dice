import logo from './logo.svg';
import './App.css';
import RollDisplay from './RollDisplay';
import { useState } from 'react';

const gen_random = (size) => {
  let my_arr = []
  for (let i = 0; i < 10; i++){
      my_arr.push(Math.ceil(Math.random() * size))
  }
  return my_arr
}

function App() {

  //const [roll, setroll] = useState(0)
  const [d20, setD20] = useState(gen_random(20))

  function clickHandler(e) {
    //setroll(roll+1); // width: 100
    setD20(gen_random(20))
}
  return (
    <div className="App" onClick={clickHandler}>
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
        <RollDisplay d20={d20} />
      </header>
    </div>
  );
}

export default App;
