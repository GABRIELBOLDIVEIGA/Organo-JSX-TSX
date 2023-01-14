import "./Card.css";

export default function Card(props) {
    return (
        <div className="card">
            <div className="fundo"></div>
            <div className="conteudo">
                <img src="/imagens/colaborador/colaborador1.png" alt="" />
                <div className="textos">
                    <h4 >Juliana Amoasei</h4>
                    <p >Desenvolvedora de software e instrutora</p>
                </div>
            </div>
        </div>
    );
}
