import Card from "../Card/Card";
import './_cardswrapper.scss';
import '../../utils/hooks/useFetch';
import {useFetch} from "../../utils/hooks/useFetch";


function CardsWrapper() {

    const [data] = useFetch('/JSON/logements.json')
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