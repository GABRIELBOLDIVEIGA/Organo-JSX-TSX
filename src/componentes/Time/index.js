import "./Time.css";
import Card from "../Card";

export default function Time(props) {
    // console.log(props);

    const corDeFundo = { backgroundColor: props.corFundo };
    const corDoTime = { backgroundColor: props.corTime };

    return (
        ( props.colaboradores.length > 0 ) &&
        <section className="time" style={corDeFundo}>
            <h3>{props.time}</h3>
            <div className="barra" style={corDoTime} />

            <div className="cards">
                {props.colaboradores.map((colaborador) => (
                    <Card 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corDoTime={corDoTime}
                        key={colaborador.nome}
                    />
                ))}
            </div>
        </section>
    );
}
