function RollDisplay({d20, d12, d10, d8, d6, d4, d100, bonus, setBonus }) {
    
        return (
        <div style={{margin: 'auto', display: 'block', columnCount: 8}}>
        
        Bonus
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
            return <p>{number+bonus}</p>
        })}

        <p> D12</p>
        {d12.map((number)=>{
            return <p>{number}</p>
        })}

        <p> D10</p>
        {d10.map((number)=>{
            return <p>{number}</p>
        })}

        <p> D8</p>
        {d8.map((number)=>{
            return <p>{number}</p>
        })}

        <p> D6</p>
        {d6.map((number)=>{
            return <p>{number}</p>
        })}

        <p> D4</p>
        {d4.map((number)=>{
            return <p>{number}</p>
        })}

        <p> D100</p>
        {d100.map((number)=>{
            return <p>{number}</p>
        })}
                
        </div>

    );
  }
  
  export default RollDisplay;
  