import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ciudad.module.css';

export default function Ciudad() {

    const {REACT_APP_API_KEY} = process.env;

    const { id } = useParams();
    const [ciudad, setCiudad] = useState({});

    const obtenerCiudad = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${REACT_APP_API_KEY}`)
        .then(rs => rs.json())
        .then((data) => {
            console.log(data);
            const detallesCiudad = {
                min: Math.round(data.main.temp_min),
                max: Math.round(data.main.temp_max),
                img: data.weather[0].icon,
                name: data.name,
                lat: Math.round(data.coord.lat),
                lon: Math.round(data.coord.lon),
                clouds: data.clouds.all,
                weather: data.weather[0].main,
                description: data.weather[0].description,
                country: data.sys.country,
            }

            setCiudad(detallesCiudad);
        });
    }
    
        useEffect(() => { // Se monta el componente
            obtenerCiudad();
        },[]);

    return (
        <React.Fragment>
            {(ciudad.name) ? (
                <div className={styles.container__ciudad}>
                {console.log(ciudad)}
                <h1>{ciudad.name}</h1>
                <h3>{ciudad.country}</h3>
                <p>Temperatura minima: {ciudad.min} K</p>
                <p>Temperatura maxima: {ciudad.max} K</p>
                <p>Latitud: {ciudad.lat}</p>
                <p>Longitud: {ciudad.lon}</p>
                <p>Clima: {ciudad.description}</p>
                <img src={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`} alt="imagen del clima" />
                </div> )
                : (<div className={styles.load}>
                    <h1>Cargando...</h1>
                  </div>)
            }
        </React.Fragment>
    );
}