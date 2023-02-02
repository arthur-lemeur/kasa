function Card({key, cover, title}) {
    return (
        <figure className="card-container" id={key}>
            <img src={ cover } alt=""/>
            <figcaption><p> { title } </p></figcaption>
        </figure>
    )
}

export default Card;