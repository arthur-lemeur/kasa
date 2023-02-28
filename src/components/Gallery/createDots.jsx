import {useEffect} from "react";


function CreateDots(props) {
    let index = props.currentPicture;
    const length = props.length;
    const setCurrentPicture = props.setCurrentPicture


    function Dots() {
        let dots = [];
        function handleClick(element) {
            const elementId = element.target.id
            setCurrentPicture(elementId);

        }
        for (let i = 0; i < length; i++) {
            dots.push(<span className="dot dot_selected" key={i} id={i} onClick={handleClick}></span>);
        }
        return dots;
    }

    useEffect(() => {
            const selectDot = () => {
                const dots = document.querySelectorAll('.dot');
                const currentDot = dots[index];
                dots.forEach((dot) => {
                    dot.classList.remove('dot_selected')
                })
                currentDot.classList.add('dot_selected');
            }
            selectDot();
    }, )
            return (
                <div className="dots">{Dots()}</div>
            )
    }


export default CreateDots;