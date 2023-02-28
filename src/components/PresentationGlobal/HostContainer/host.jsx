import './_host.scss';

function Host({hostpicture, hostname}) {
    return(
        <div className="host">
            <p>{hostname}</p>
            <img src={hostpicture} alt="Hôte"/>
        </div>
    )
}

export default Host;