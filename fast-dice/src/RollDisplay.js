import React, {useState} from "react";

function RollDisplay() {
    const [roll, setroll] = useState(function generateRandomInteger() {
            return Math.ceil(Math.random() * 20);
            })

    function clickHandler(e) {
        setroll(Math.ceil(Math.random() * 20));
    }
        return (
        <div style={{margin: 'auto', width: 100, display: 'block'}}>
        <h1> {roll} </h1>
    
    
        <p>
        <button onClick={clickHandler}> Click </button>
        </p>
        
        
        </div>
    );
  }
  
  export default RollDisplay;
  