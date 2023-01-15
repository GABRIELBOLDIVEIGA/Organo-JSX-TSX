import "./ListaSuspensa.css";

export default function ListaSuspensa(props) {

    // console.log("Props Lista => ", props)

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.required}>
            <option value=""></option>
                {props.itens.map((item) => (
                    <option key={item} > {item} </option>
                ))}
            </select>
        </div>
    );
}
