function TitleAndLocation({title, location, tags}) {
    return(
        <div>
            <h2>{title}</h2>
            <p>{location}</p>
            {tags.map((tag) => (
                <button key={tag}>{tag}</button>
            ))}
        </div>
    )
}

export default TitleAndLocation;