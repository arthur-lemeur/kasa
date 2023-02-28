import {useEffect, useState} from "react";

export function useFetchCollapses() {
    const [data, setData] = useState([])

    useEffect(() => {
        const url =  "JSON/Collapses.json"

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log("error", error)
            }
        }

        fetchData();
        },
        [])

    return [data]
}
