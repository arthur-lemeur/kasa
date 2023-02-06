function Host({hostpicture, hostname}) {
    return(
        <div className="host">
            <p>{hostname}</p>
            <img src={hostpicture} alt="Host Picture"/>
        </div>
    )
}

export default Host;