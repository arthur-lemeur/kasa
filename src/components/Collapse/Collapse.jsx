import {useState} from "react";
import './_collapse.scss';
import ChevronUp from '../../assets/chevrons/chevron-up.png';
import ChevronDown from '../../assets/chevrons/chevron-down.png'




function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
    <div className="collapse-wrapper">
        <div className="collapse-title" onClick={() => setIsOpen(!isOpen)}>
            <h3>
                {title}
            </h3>
            <div>
                {isOpen ?
                    <img src={ChevronUp}/>
                    : <img src={ChevronDown}/> }
            </div>
        </div>
        {isOpen ?
        <p className="collapse-description">
            {description}
        </p> : null
            }
    </div>
    )
}

export default Collapse;