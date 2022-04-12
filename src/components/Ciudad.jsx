import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Ciudad() {

    const {REACT_APP_API_KEY} = process.env;

    const { id } = useParams();
    const [ciudad, setCiudad] = useState({});
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${REACT_APP_API_KEY}`)
        .then(rs => rs.json())
        .then((data) => {
            const detallesCiudad = {
                min: data.main.temp_min,
                max: data.main.temp_max,
                img: data.weather[0].icon,
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
                clouds: data.clouds.all,
                weather: data.weather[0].main,
                description: data.weather[0].description,
                country: data.sys.country,

            }
            setCiudad(detallesCiudad);
        });

    return (
        <div>
            <h1>{ciudad.name}</h1>
            <span>{ciudad.min}</span>
            <span>{ciudad.max}</span>
            <span>{ciudad.lat}</span>
            <span>{ciudad.lon}</span>
            <span>{ciudad.clouds}</span>
            <span>{ciudad.weather}</span>
        </div>
    );
}