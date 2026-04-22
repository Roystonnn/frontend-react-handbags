function buttonLog(e) {
    console.log(e.target.innerText);
}

function ButtonCard(props) {

    return (
        <>
                <button onClick={buttonLog}>
                    {props.buttonTitle}
                </button>
        </>
    )
}

export default ButtonCard;