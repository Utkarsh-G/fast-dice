import React, {useState} from "react";

function RollDisplay() {
    const [roll, setroll] = useState(0)

    function clickHandler(e) {
        setroll(roll+1); // width: 100
    }
        return (
        <div> 
        <div style={{margin: 'auto', display: 'block', columnCount: 7}}>
        <p> D20</p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>

        <p>
        <button onClick={clickHandler}> Click </button>
        </p>
        

        <p> D12</p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>
        <p> {Math.ceil(Math.random() * 12)} </p>

        <p>
        <button onClick={clickHandler}> Click </button>
        </p>

        <p> D10</p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        <p> {Math.ceil(Math.random() * 10)} </p>
        
        <p>
        <button onClick={clickHandler}> Click </button>
        </p>

        <p> D8</p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        <p> {Math.ceil(Math.random() * 8)} </p>
        
        <p>
        <button onClick={clickHandler}> Click </button>
        </p>

        <p> D6</p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        <p> {Math.ceil(Math.random() * 6)} </p>
        
        <p>
        <button onClick={clickHandler}> Click </button>
        </p>

        <p> D4</p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        <p> {Math.ceil(Math.random() * 4)} </p>
        
        <p>
        <button onClick={clickHandler}> Click </button>
        </p>

        <p> D100</p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        <p> {Math.ceil(Math.random() * 100)} </p>
        
        <p>
        <button onClick={clickHandler}> Click </button>
        </p>
        
        </div>
        </div>
    );
  }
  
  export default RollDisplay;
  