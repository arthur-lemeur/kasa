function TitleAndLocation({title, location, tags}) {
    return(
        <div className="title-and-location">
            <h2>{title}</h2>
            <p>{location}</p>
            <div className="tags">
                {tags.map((tag) => (
                    <button key={tag}>{tag}</button>
                ))}
            </div>
        </div>
    )
}

export default TitleAndLocation;