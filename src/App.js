import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Cards from './components/Cards.jsx';
import Ciudad from "./components/Ciudad.jsx";
import './app.css'

function App() {

  const {REACT_APP_API_KEY} = process.env;

  const [ciudades, setCiudad] = useState([]);
  const consultarCiudad = (ciudad) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}&units=metric`)
      .then(respuesta => respuesta.json())
      .then(info => {
          const objCiudad = {
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
          const encontrarCiudad = ciudades.find(ciudad => ciudad.id === objCiudad.id);
          if (encontrarCiudad) {
            alert('Esta ciudad ya se encuentra!');
          } else {
            setCiudad(oldCiudades => [...oldCiudades,objCiudad]);
          }
      });
  }

  const onClose = (idCiudad) => {
    setCiudad(oldCiudades => oldCiudades.filter(c => c.id !== idCiudad));
  }

  return (
    <div className="App">
        <Nav consultarCiudad={consultarCiudad}/>
      <Routes>
        <Route path="/" element={<Cards ciudad={ciudades} onClose={onClose}/>} />
        <Route path="/ciudad/:id" element={<Ciudad/>} />

      </Routes>

    </div>
  );
}

export default App;
