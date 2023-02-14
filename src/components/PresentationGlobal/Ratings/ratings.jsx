import StarColored from '../../../assets/star-colored.svg'
import StarGrey from '../../../assets/star-grey.svg'

function Ratings({rating}) {
    const length = parseInt(rating);
    const stars = [];

    function Stars() {
        for (let i = 0; i < length; i++) {
            stars.push(<img src={StarColored} alt="rating" key={i}/>)
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<img src={StarGrey} alt="rating" key={i +5}/>)
        }
        return stars;
    }

    return(
        <div className="stars">{Stars()}</div>
    )
}

export default Ratings;