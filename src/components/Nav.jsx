import { useState } from "react";
import '../components/nav.css';

export default function Nav({consultarCiudad}) {

    const [input,setInput] = useState('');

    const capturarInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <nav className="nav">
            <input type="text" onChange={(e) => capturarInput(e)} value={input} placeholder="Ciudad..."/>
            <button className="btn" onClick={() => {
                    if (!input) {
                        alert('debe ingresar una ciudad')
                    } else {
                        consultarCiudad(input)
                        setInput('');    
                    }
                }
                
            }>Buscar</button>
        </nav>
    );
}