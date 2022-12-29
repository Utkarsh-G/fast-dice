import logo from './logo.svg';
import './App.css';
import RollDisplay from './RollDisplay';
import { useState } from 'react';

const gen_random = (size) => {
  let my_arr = []
  for (let i = 0; i < 11; i++){
      my_arr.push(Math.ceil(Math.random() * size))
  }
  return my_arr
}

function App() {

  //const [roll, setroll] = useState(0)
  const [d20, setD20] = useState(gen_random(20))
  const [d12, setD12] = useState(gen_random(12))
  const [d10, setD10] = useState(gen_random(10))
  const [d8, setD8] = useState(gen_random(8))
  const [d6, setD6] = useState(gen_random(6))
  const [d4, setD4] = useState(gen_random(4))
  const [d100, setD100] = useState(gen_random(100))

  const [bonus, setBonus] = useState(0)

  function clickHandler(e) {
    //setroll(roll+1); // width: 100
    setD20(gen_random(20))
    setD12(gen_random(12))
    setD10(gen_random(10))
    setD8(gen_random(8))
    setD6(gen_random(6))
    setD4(gen_random(4))
    setD100(gen_random(100))
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
        <RollDisplay d20={d20} d12={d12} d10={d10} d8={d8} d6={d6} d4={d4} d100={d100} bonus={bonus} setBonus={setBonus} />
      </header>
    </div>
  );
}

export default App;
