import React, {useState} from "react";


const gen_random = (size) => {
    let my_arr = []
    for (let i = 0; i < 10; i++){
        my_arr.push(Math.ceil(Math.random() * size))
    }
    return my_arr
}

function RollDisplay({d20}) {
    //const [roll, setroll] = useState(0)
    //const [d20, setD20] = useState(gen_random(20))
    const [d12, setD12] = useState(gen_random(12))
    const [d10, setD10] = useState(gen_random(10))
    const [d8, setD8] = useState(gen_random(8))
    const [d6, setD6] = useState(gen_random(6))
    const [d4, setD4] = useState(gen_random(4))
    const [d100, setD100] = useState(gen_random(100)) 

    function clickHandler(e) {
        //setroll(roll+1); // width: 100
        //setD20(gen_random(20))
    }
        return (
        <div style={{margin: 'auto', display: 'block', columnCount: 8}}>
        
        Bonus {d20[0]}
        <p> Nat </p>
        <p> -1 </p>
        <p> 0 </p>
        <p> +1 </p>
        <p> +2 </p>
        <p> +3 </p>
        <p> +4 </p>
        <p> +5 </p>
        <p> +6 </p>
        <p> +7 </p> 
        
        <p> D20</p>
        {d20.map((number)=>{
            return <p>{number}</p>
        })}
        {/* <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)-1} </p>
        <p> {Math.ceil(Math.random() * 20)} </p>
        <p> {Math.ceil(Math.random() * 20)+1} </p>
        <p> {Math.ceil(Math.random() * 20)+2} </p>
        <p> {Math.ceil(Math.random() * 20)+3} </p>
        <p> {Math.ceil(Math.random() * 20)+4} </p>
        <p> {Math.ceil(Math.random() * 20)+5} </p>
        <p> {Math.ceil(Math.random() * 20)+6} </p>
        <p> {Math.ceil(Math.random() * 20)+7} </p> */}

        
        

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
        
        
        
        </div>

    );
  }
  
  export default RollDisplay;
  