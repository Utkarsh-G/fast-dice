function NumberBlock({number, setBonus, setMultiplier}) {

    function clickHandler (e) {
        if (setBonus) setBonus(number)
        if (setMultiplier) setMultiplier(number)
    }

    return (<p onClick={clickHandler}> {number}</p>)
}

export default NumberBlock;