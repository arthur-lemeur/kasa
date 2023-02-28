import StarColored from '../../../assets/star-colored.svg'
import StarGrey from '../../../assets/star-grey.svg'
import uuid from 'react-uuid';

function Ratings(props) {

    const {rating} = props
    const length = props ? parseInt(rating) : 0;
    const stars = [];

    function Stars() {
        for (let i = 0; i < length; i++) {
            stars.push(<img src={StarColored} alt="rating" key={uuid()}/>)
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<img src={StarGrey} alt="rating" key={uuid()}/>)
        }
        return stars;
    }

    return(
        <div className="stars">{Stars()}</div>
    )
}

export default Ratings;