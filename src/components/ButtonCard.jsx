import './ButtonCard.css'

function ButtonCard(props) {

    return (
        <>
            <nav>
                <button>
                    {props.buttonTitle}
                </button>
            </nav>
        </>
    )
}

export default ButtonCard;