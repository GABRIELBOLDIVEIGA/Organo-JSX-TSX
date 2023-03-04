import "./banner.css";
import React from "react";

interface BannerProps {
    enderecoDaImagem: string;
    textoAlternativo: string;
}

const Banner = ({ enderecoDaImagem, textoAlternativo }: BannerProps) => {
    return (
        <header className="cabecalho">
            {/* <img src="/imagens/banner.png" alt="Logo do Organo" /> */}
            <img src={enderecoDaImagem} alt={textoAlternativo} />
        </header>
    );
};

export default Banner;
