import Collapse from "../../Collapse/Collapse";
import './details-container.scss';

function DetailsContainer({description, equipements}) {
    return (
        <div className="details-container">
            <Collapse
                title="Description"
                description={description}
            />
            <Collapse
                title="Équipements"
                description={equipements.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            />
        </div>
    )
}

export default DetailsContainer;