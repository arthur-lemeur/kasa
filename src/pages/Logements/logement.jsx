import Layout from "../../layout/layout"

import PresentationLogement from "../../components/PresentationGlobal/presentation";
import Gallery from "../../components/Gallery/gallery";
import DetailsContainer from "../../components/PresentationGlobal/DetailsContainer/details-container";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetchLogements} from "../../utils/hooks/useFetchLogements";


function Logement() {

    const navigate = useNavigate();
    const {id} = useParams();
    const [logement, setLogement] = useState();
    const [data] = useFetchLogements();

    useEffect(() => {
        if (data.length) {
                const findLogement = data.find(logement => logement.id === id);
                if (findLogement === undefined) {
                    navigate('/Error');
                } else {
                    setLogement(findLogement);
                }
        }
    }, [data])

    return (
        <div className="App">
            {logement && (
                <Layout>
                    <Gallery
                        pictures={logement.pictures}
                    />
                    <PresentationLogement
                        key={(logement.id)}
                        title={(logement.title)}
                        location={(logement.location)}
                        tags={(logement.tags)}
                        hostname={(logement.host.name)}
                        hostpicture={(logement.host.picture)}
                        rating={typeof logement.rating == "string" ? logement.rating : undefined}
                    />
                    <DetailsContainer
                        description={(logement.description)}
                        equipements={(logement.equipments)}
                    />
                </Layout>
            )}

        </div>
    );

}

export default Logement;
