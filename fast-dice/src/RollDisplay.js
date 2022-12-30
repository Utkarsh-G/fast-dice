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

        const multiplierArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        const bonusArray = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        return (
        <div style={{margin: 'auto', display: 'block', columnCount: 9}}>
        
        Bonus:{bonus}
        {bonusArray.map((number) => {
            return <NumberBlock number={number} setBonus={setBonus} highlight={number==bonus? "green": "none"}/>
        })}
        
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

        #Dice:{multiplier}
        {multiplierArray.map((number) => {
            return <NumberBlock number={number} setMultiplier={setMultiplier} highlight={number==multiplier? "green": "none"}/>
        })}
                
        </div>

    );
  }
  
  export default RollDisplay;
  