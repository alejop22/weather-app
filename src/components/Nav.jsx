import { useState } from "react";
import '../components/nav.css';

export default function Nav({consultarCiudad}) {

    const [input,setInput] = useState('');

    const capturarInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <nav className="nav">
            <input type="text" onChange={(e) => capturarInput(e)}/>
            <button className="btn" onClick={() => consultarCiudad(input)}>Buscar</button>
        </nav>
    );
}