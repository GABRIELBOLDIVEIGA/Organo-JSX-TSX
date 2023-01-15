import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";
import { useState } from "react";

export default function Formulario(props) {
    // const timesssssss = [
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

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradoresCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        })
        evento.target.reset();
        setNome("");
        setCargo("");
        setImagem("-");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <div>
                    <h2>Preencha os dados para criar o card do colaborador.</h2>
                </div>

                <CampoTexto 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => {setNome(valor)}}
                />

                <CampoTexto 
                    required={true} 
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => {setCargo(valor)}}
                />

                <CampoTexto 
                    label="URL da Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => {setImagem(valor)}}
                />

                <ListaSuspensa 
                    required={true} 
                    itens={props.times} 
                    label="Time" 
                    valor={time}
                    aoAlterado={valor => {setTime(valor)}}
                />

                <Botao>Cria Card</Botao>
            </form>
        </section>
    );
}
