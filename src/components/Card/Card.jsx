import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import './_card.scss';

function Card(props) {

    const [logement, setLogement] = useState(props.logement);



    return (
        <Link to={"logement/" + logement.id}>
            <figure className="card-container" id={logement.id}>
                <img src={logement.cover} alt={logement.title}/>
                <figcaption><p>{logement.title}</p></figcaption>
            </figure>
        </Link>
    )
}

export default Card;