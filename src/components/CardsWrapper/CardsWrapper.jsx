import Card from "../Card/Card";
import Logements from "./logement/logements.json";
import {useEffect, useState} from "react";



function CardsWrapper() {
/*    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
            .then((response) => response.json())
            .then(({data}) => console.log(data))
            .catch((error) => console.log(error))
        }, [])*/
    return (
        <div className="cards-wrapper">
            {Logements.map((item) => (
                <Card
                key= {item.id}
                title={item.title}
                cover={item.cover}
                />
            ))}
        </div>
    )
}
export default CardsWrapper;