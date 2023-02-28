import './_presentation.scss';
import Ratings from "./Ratings/ratings";
import Host from "./HostContainer/host";
import TitleAndLocation from "./PresentationContainer/presentationContainer";

function PresentationLogement(props) {
    const title = props.title;
    const tags = props.tags;
    const location = props.location;
    const hostname = props.hostname;
    const hostpicture = props.hostpicture;
    const rating = props.rating;

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