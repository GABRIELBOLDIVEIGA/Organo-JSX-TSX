import "./colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React from "react";
import IColaborador from "common/interface/IColaborador";

interface ColaboradorProps {
    colaborador: IColaborador;
    corDeFundo: string;
    aoDeletar: (id: string) => void;
    aoFavoritar: (id: string) => void;
}

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar,
    };

    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />

            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>

            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">{colaborador.favorito ? <AiFillHeart {...propsFavorito} color="#ff0000" /> : <AiOutlineHeart {...propsFavorito} />}</div>
            </div>
        </div>
    );
};

export default Colaborador;
