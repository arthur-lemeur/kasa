import Layout from "../../layout/layout"

import PresentationLogement from "../../components/PresentationGlobal/presentation";
import Gallery from "../../components/Gallery/gallery";
import DetailsContainer from "../../components/PresentationGlobal/DetailsContainer/details-container";
import {useLocation} from "react-router-dom";


function Logement() {

    const location = useLocation();
    const logement = location.state.logement;

    return (
        <div className="App">
                    <Layout>
                       <Gallery
                        pictures={(logement.pictures)}
                        />
                        <PresentationLogement
                        key={(logement.id)}
                        title={(logement.title)}
                        location={(logement.location)}
                        tags={(logement.tags)}
                        hostname={(logement.host.name)}
                        hostpicture={(logement.host.picture)}
                        rating={logement.rating}
                        />
                        <DetailsContainer
                        description={(logement.description)}
                        equipements={(logement.equipments)}
                        />
                    </Layout>
        </div>
    );

}

export default Logement;
