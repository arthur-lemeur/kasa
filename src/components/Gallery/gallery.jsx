import React, {useState} from "react";
import './_gallery.scss';
import ArrowLeft from "../../assets/arrow_left.png";
import ArrowRight from "../../assets/arrow_right.png";
import CreateDots from "./createDots";

function Gallery({pictures}) {
    const [currentPicture, setCurrentPicture] = useState(0)
    const length = pictures.length


    const handlePrevious = () => {
        const currentIndex = currentPicture - 1;
        setCurrentPicture(currentIndex < 0 ? length - 1 : currentIndex);
    };

    const handleNext = () => {
        const currentIndex = currentPicture + 1;
        setCurrentPicture(currentIndex >= length ? 0 : currentIndex);
    };

    const multipleImages = length > 1;

    return (
        <React.Fragment>
            {multipleImages ? (
                <div id="banner">
                        <img src={ArrowLeft} className="arrow arrow_left" alt="précédent" onClick={handlePrevious} />

                        <img src={ArrowRight} className="arrow arrow_right" alt="suivant" onClick={handleNext} />

                        <div className='slide active'>
                            <img src={pictures[currentPicture]} alt="photos du logement" className="image"/>
                        </div>

                        <CreateDots
                            setCurrentPicture={setCurrentPicture}
                            length={length}
                            currentPicture={currentPicture}
                        />
                </div>
            ) : (
                <div id="banner">
                    <div className='slide active'>
                        <img src={pictures[currentPicture]} alt="logement" className="image"/>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default Gallery;