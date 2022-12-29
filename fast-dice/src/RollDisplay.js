import React, {useState} from "react";

function RollDisplay() {
    const [roll, setroll] = useState(0)

    function clickHandler(e) {
        setroll(roll+1);
    }
        return (
        <div style={{margin: 'auto', width: 100, display: 'block'}}>
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
        
        
        </div>
    );
  }
  
  export default RollDisplay;
  