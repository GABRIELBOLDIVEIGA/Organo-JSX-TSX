import "./ListaSuspensa.css";

export default function ListaSuspensa(props) {
    // let Time = [
    //     {
    //         nome: "Programação",
    //         corFundo: "#D9F7E9",
    //         corTime: "#57C278",
    //     },
    //     {
    //         nome: "Front End",
    //         corFundo: "#E8F8FF",
    //         corTime: "#82CFFA",
    //     },
    //     {
    //         nome: "Data Science",
    //         corFundo: "#F0F8E2",
    //         corTime: "#A6D157",
    //     },
    //     {
    //         nome: "Devops",
    //         corFundo: "#FDE7E8",
    //         corTime: "#E06B69",
    //     },
    //     {
    //         nome: "UX e Design",
    //         corFundo: "#FFEEDF",
    //         corTime: "#DB6EBF",
    //     },
    //     {
    //         nome: "Mobile",
    //         corFundo: "#FAE9F5",
    //         corTime: "#FFBA05",
    //     },
    //     {
    //         nome: "Inovação e Gestão",
    //         corFundo: "#FAE9F5",
    //         corTime: "#FF8A29",
    //     },
    // ];
    // console.table(props.itens)

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value} required={props.required}>
                {props.itens.map((item) => (
                    <option  key={item}> {item} </option>
                ))}
            </select>
        </div>
    );
}
