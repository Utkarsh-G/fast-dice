import NumberBlock from "./NumberBlock";

function RollDisplay({d20, d12, d10, d8, d6, d4, d100, bonus, setBonus }) {
    
        return (
        <div style={{margin: 'auto', display: 'block', columnCount: 8}}>
        
        Bonus:{bonus}
        {/* <p> Nat </p> */}
        <NumberBlock number={-1} setBonus={setBonus}/>
        <NumberBlock number={0} setBonus={setBonus}/>
        <NumberBlock number={1} setBonus={setBonus}/>
        <NumberBlock number={2} setBonus={setBonus}/>
        <NumberBlock number={3} setBonus={setBonus}/>
        <NumberBlock number={4} setBonus={setBonus}/>
        <NumberBlock number={5} setBonus={setBonus}/>
        <NumberBlock number={6} setBonus={setBonus}/>
        <NumberBlock number={7} setBonus={setBonus}/>
        <NumberBlock number={8} setBonus={setBonus}/>
        <NumberBlock number={9} setBonus={setBonus}/>
        
        <p> D20</p>
        {d20.map((number)=>{
            return <p>{number+bonus}</p>
        })}

        <p> D12</p>
        {d12.map((number)=>{
            return <p>{number+bonus}</p>
        })}

        <p> D10</p>
        {d10.map((number)=>{
            return <p>{number+bonus}</p>
        })}

        <p> D8</p>
        {d8.map((number)=>{
            return <p>{number+bonus}</p>
        })}

        <p> D6</p>
        {d6.map((number)=>{
            return <p>{number+bonus}</p>
        })}

        <p> D4</p>
        {d4.map((number)=>{
            return <p>{number+bonus}</p>
        })}

        <p> D100</p>
        {d100.map((number)=>{
            return <p>{number+bonus}</p>
        })}
                
        </div>

    );
  }
  
  export default RollDisplay;
  