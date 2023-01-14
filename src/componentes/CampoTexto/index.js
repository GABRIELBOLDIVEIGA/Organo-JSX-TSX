import "./CampoTexto.css";

export default function CampoTexto(props) {
    
    const aoAlterado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                value={props.value}
                onChange={aoAlterado} 
                required={props.required} 
                placeholder={props.placeholder} 
            />
        </div>
    );
}
