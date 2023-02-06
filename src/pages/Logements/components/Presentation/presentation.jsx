import Star from '../../../../assets/Vector.svg';
import Collapse from "../../../../components/Collapse/Collapse";
import './_presentation.scss';
import Ratings from "./components/ratings";
import Host from "./components/host";
import TitleAndLocation from "./components/presentationContainer";

function PresentationLogement({title, location, tags, hostname, hostpicture}) {
    return (
        <div>
            <div className="presentation-container">
                    <TitleAndLocation
                        title={title}
                        location={location}
                        tags={tags}
                        />
                <div>
                    <Host
                        hostname={hostname}
                        hostpicture={hostpicture}
                    />
                    <Ratings/>
                </div>
            </div>
        </div>
    )
}

export default PresentationLogement;