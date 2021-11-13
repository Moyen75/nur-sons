import { useEffect, useState } from "react";

const useData = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://arcane-meadow-17287.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [cars])
    return cars;
}
export default useData;