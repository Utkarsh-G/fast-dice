function NumberBlock({number, setBonus}) {

    function clickHandler (e) {
        setBonus(number)
    }

    return (<p onClick={clickHandler}> {number}</p>)
}

export default NumberBlock;