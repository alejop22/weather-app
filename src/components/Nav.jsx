import { useState } from "react";
import { Link } from "react-router-dom";
import '../components/nav.css';

export default function Nav({consultarCiudad}) {

    const [input,setInput] = useState('');

    const capturarInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <nav className="nav">
           
            <div>
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
            </div>
            <Link to="/" className="home">
                Home
            </Link>
        </nav>
    );
}