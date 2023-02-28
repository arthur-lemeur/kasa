import Card from "../Card/Card";
import './_cardswrapper.scss';
import {useFetchLogements} from "../../utils/hooks/useFetchLogements";


function CardsWrapper() {
    const [data] = useFetchLogements()

    return (
        <div className="cards-wrapper">
            {data && data.map((item) => (
                <Card logement={item}
                      key={item.id}
                />
            ))}
        </div>
    )
}

export default CardsWrapper;