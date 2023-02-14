import './_presentation.scss';
import Ratings from "./Ratings/ratings";
import Host from "./HostContainer/host";
import TitleAndLocation from "./PresentationContainer/presentationContainer";
import ratings from "./Ratings/ratings";

function PresentationLogement({title, location, tags, hostname, hostpicture, rating}) {
    return (
        <div>
            <div className="presentation-container">
                    <TitleAndLocation
                        title={title}
                        location={location}
                        tags={tags}
                        />
                <div className="host-rating-container">
                    <Host
                        hostname={hostname}
                        hostpicture={hostpicture}
                    />
                    <Ratings
                    rating={rating}/>
                </div>
            </div>
        </div>
    )
}

export default PresentationLogement;