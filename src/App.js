import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Cards from './components/Cards.jsx'
import './app.css'

function App() {

  const {REACT_APP_API_KEY} = process.env;

  const [ciudad, setCiudad] = useState([]);
  const consultarCiudad = (ciudad) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}&units=metric`)
      .then(respuesta => respuesta.json())
      .then(info => {
          const ciudad = {
            min: Math.round(info.main.temp_min),
            max: Math.round(info.main.temp_max),
            img: info.weather[0].icon,
            id: info.id,
            wind: info.wind.speed,
            temp: info.main.temp,
            name: info.name,
            weather: info.weather[0].main,
            clouds: info.clouds.all,
            latitud: info.coord.lat,
            longitud: info.coord.lon
          };
          
          setCiudad(oldCiudades => [...oldCiudades,ciudad]);
      });
  }

  return (
    <div className="App">
     <Nav 
      consultarCiudad={consultarCiudad}/>
      <Cards ciudad={ciudad}/>
    </div>
  );
}

export default App;
