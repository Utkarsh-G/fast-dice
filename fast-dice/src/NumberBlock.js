function NumberBlock({number, setBonus, setMultiplier, highlight}) {

    function clickHandler (e) {
        if (setBonus) setBonus(number)
        if (setMultiplier) setMultiplier(number)
    }

    return (<p onClick={clickHandler} style={{background:highlight}}> {number}</p>)
}

export default NumberBlock;