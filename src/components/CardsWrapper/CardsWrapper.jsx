import Card from "../Card/Card";
import './_cardswrapper.scss';
import '../../utils/hooks/useFetchLogements';
import {useFetchLogements} from "../../utils/hooks/useFetchLogements";


function CardsWrapper() {

    const [data] = useFetchLogements()

    return (
        <div className="cards-wrapper">
           {data.map((item, index) => (
               <Card logement={item}
               key={item.id}
               />
            ))}
        </div>
    )
}

export default CardsWrapper;