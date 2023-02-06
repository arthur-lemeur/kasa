import Layout from "../../layout/layout"

import PresentationLogement from "./components/Presentation/presentation";
import Gallery from "./components/Gallery/gallery";
import {useFetch} from "../../utils/hooks/useFetch";
import DetailsContainer from "./components/DetailsContainer/details-container";
import {useLocation} from "react-router-dom";
import Logements from '../../utils/JSON/logements.json'


function Logement() {


/*    const [data] = useFetch('/JSON/logements.json')*/

    let currentLocation = useLocation();
    let id = currentLocation.pathname.split('/')[2];
    const findIndex =  (element => element.id === id);

    const lodging =  Logements[Logements.findIndex(findIndex)]


    return (
        <div className="App">
                    <Layout>
                        <Gallery
                        pictures={(lodging.pictures)}
                        />
                        <PresentationLogement
                        key={(lodging.id)}
                        title={(lodging.title)}
                        location={(lodging.location)}
                        tags={(lodging.tags)}
                        hostname={(lodging.host.name)}
                        hostpicture={(lodging.host.picture)}
                        />
                        <DetailsContainer
                        description={(lodging.description)}
                        equipements={(lodging.equipments)}
                        />
                    </Layout>
        </div>
    );

}

export default Logement;
