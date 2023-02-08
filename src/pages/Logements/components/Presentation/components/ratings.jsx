import {StarRed, StarEmpty} from "./star";

function Ratings({rating}) {
    const stars = parseInt(rating)
    const arr = Array(stars)
    arr.fill('x')
    const arr2 = Array(5 - stars);
    arr2.fill('x')


    return(
        <div className="stars">
            {arr.map((r) => (
                <StarRed
                    key={Math.floor(Math.random() * 1000)}
                />
            )
            )}
            {arr2.map((s) => (
                <StarEmpty
                    key={Math.floor(Math.random() * 1000)}
                />
            ))}

        </div>
    )
}

export default Ratings;