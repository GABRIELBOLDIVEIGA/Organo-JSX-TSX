import "./Card.css";

export default function Card({nome, cargo, imagem: imagemURL, corDoTime}) {
    // console.log(props);

    return (
        <div className="card">
            <div className="fundo" style={corDoTime}></div>
            <div className="conteudo">
                <img src={imagemURL.includes(".png") ? imagemURL : `${imagemURL}.png`} alt="" />
                <div className="textos">
                    <h4>{nome}</h4>
                    <p>{cargo}</p>
                </div>
            </div>
        </div>
    );
}
