function ProductCard(props) {
    return (
        <article>
            <span>
                {props.label}
            </span>
            <img src={props.image} alt={props.imageAlt}/>
            <p>
                {props.product}
            </p>
            <h4>
                {props.price}
            </h4>
        </article>
    )
}

export default ProductCard;