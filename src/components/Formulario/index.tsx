import React, { useState } from "react";
import Botao from "components/Botao";
import Campo from "components/Campo";
import ListaSuspensa from "components/ListaSuspensa";
import { v4 as uuidv4 } from 'uuid';
import "./formulario.css";
import ITime from "common/interface/ITime";
import IColaborador from "common/interface/IColaborador";

interface FormularioProps {
    times: string[];
    aoCadastrar: (colaborador: IColaborador) => void
    cadastrarTime: (novoTime: ITime) => void;
}

const Formulario = ({ aoCadastrar, times, cadastrarTime }: FormularioProps) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setnomeTime] = useState("");
    const [corTime, setCorTime] = useState("#8e29d1");

    const aoSubmeterColaborador = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        console.log("form enviado", nome, cargo, imagem, time);
        
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4(),
            favorito: false
        });

        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    };

    const aoSubmeterNovoTime = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        cadastrarTime({
            nome: nomeTime, cor: corTime,
            id: ""
        });
        setnomeTime("");
        setCorTime("#8e29d1");
    };

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeterColaborador}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} 
                    aoAlterado={(valor) => setNome(valor)} 
                />

                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo} 
                    aoAlterado={(valor) => setCargo(valor)} 
                />

                <Campo 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem} 
                    aoAlterado={(valor) => setImagem(valor)} 
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    items={times} 
                    valor={time} 
                    aoAlterado={(valor) => setTime(valor)} 
                />
                <Botao>Criar card</Botao>
            </form>

            <form className="formulario" onSubmit={aoSubmeterNovoTime}>
                <h2>Preencha os dados para criar um novo Time.</h2>
                <Campo 
                    obrigatorio 
                    label="Nome" 
                    placeholder="Digite o nome do Time." 
                    valor={nomeTime} 
                    aoAlterado={(valor) => setnomeTime(valor)} 
                />
                <Campo 
                    type="color" 
                    label="Cor" 
                    valor={corTime} 
                    aoAlterado={(valor) => setCorTime(valor)} 
                />
                <Botao>Criar um novo Time.</Botao>
            </form>
        </section>
    );
};

export default Formulario;
