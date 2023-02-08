import './_presentation.scss';
import Ratings from "./components/ratings";
import Host from "./components/host";
import TitleAndLocation from "./components/presentationContainer";
import ratings from "./components/ratings";

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