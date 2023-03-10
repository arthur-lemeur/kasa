import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import './_card.scss';

function Card(props) {

    const [logement] = useState(props.logement);

    useEffect(() => {
        const ratio = 0.5
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
        }
        const handleIntersect = (entries, observer) => {
            entries.forEach(function(entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add("reveal-visible")
                    observer.unobserve(entry.target)
                }
            })
        }
        const observer = new IntersectionObserver(handleIntersect, options);
        document.querySelectorAll('.reveal').forEach(function (r) {
            observer.observe(r);
        })
    })
    return (
        <Link to={"logement/" + logement.id} className="reveal card-link">
            <figure className="card-container" id={logement.id}>
                <img src={logement.cover} alt={logement.title}/>
                <figcaption><p>{logement.title}</p></figcaption>
            </figure>
        </Link>
    )
}


export default Card;