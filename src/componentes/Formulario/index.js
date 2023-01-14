import CampoTexto from "../CampoTexto";
import CampoData from "../CampoData";
import BotaoCriaCard from "../BotaoCriaCard";
import "./Formulario.css"

export default function Formulario() {
    return (
        <form className="form">
            <div>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
            </div>

            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
            <CampoData label="Data" type="time"/>
            
            <BotaoCriaCard />
        </form>
    );
}
