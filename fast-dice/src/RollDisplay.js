import NumberBlock from "./NumberBlock";

function RollDisplay({d20, d12, d10, d8, d6, d4, d100, bonus, setBonus, multiplier, setMultiplier }) {
    
        function multipleDiceSum (diceArray, index, numberOfDice){
            let sum = 0
            for (var i = 0; i < numberOfDice; i++){
                sum += diceArray[index]
                index = (index + 1) % diceArray.length
            }
            return sum
        }

        return (
        <div style={{margin: 'auto', display: 'block', columnCount: 9}}>

        Multiplier:{multiplier}
        <NumberBlock number={1} setMultiplier={setMultiplier} />
        <NumberBlock number={2} setMultiplier={setMultiplier}/>
        <NumberBlock number={3} setMultiplier={setMultiplier}/>
        <NumberBlock number={4} setMultiplier={setMultiplier}/>
        <NumberBlock number={5} setMultiplier={setMultiplier}/>
        <NumberBlock number={6} setMultiplier={setMultiplier}/>
        <NumberBlock number={7} setMultiplier={setMultiplier}/>
        <NumberBlock number={8} setMultiplier={setMultiplier}/>
        <NumberBlock number={9} setMultiplier={setMultiplier}/>
        <NumberBlock number={10} setMultiplier={setMultiplier}/>
        <NumberBlock number={11} setMultiplier={setMultiplier}/>
        
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
        
        <p> {multiplier}D20+{bonus}</p>
        {d20.map((number, index)=>{
            return <p>{multipleDiceSum(d20, index, multiplier)+bonus}</p>
        })}

        <p> {multiplier}D12+{bonus}</p>
        {d12.map((number, index)=>{
            return <p>{multipleDiceSum(d12, index, multiplier)+bonus}</p>
        })}

        <p> {multiplier}D10+{bonus}</p>
        {d10.map((number, index)=>{
            return <p>{multipleDiceSum(d10, index, multiplier)+bonus}</p>
        })}

        <p> {multiplier}D8+{bonus}</p>
        {d8.map((number, index)=>{
            return <p>{multipleDiceSum(d8, index, multiplier)+bonus}</p>
        })}

        <p> {multiplier}D6+{bonus}</p>
        {d6.map((number, index)=>{
            return <p>{multipleDiceSum(d6, index, multiplier)+bonus}</p>
        })}

        <p> {multiplier}D4+{bonus}</p>
        {d4.map((number, index)=>{
            return <p>{multipleDiceSum(d4, index, multiplier)+bonus}</p>
        })}

        <p> {multiplier}D100+{bonus}</p>
        {d100.map((number, index)=>{
            return <p>{multipleDiceSum(d100, index, multiplier)+bonus}</p>
        })}
                
        </div>

    );
  }
  
  export default RollDisplay;
  