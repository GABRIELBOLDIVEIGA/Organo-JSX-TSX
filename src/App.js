import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
        // console.log("Colaborador adicionado: ", colaborador);
    }

    const times = [
        {
            time: "Programação",
            corFundo: "#D9F7E9",
            corTime: "#57C278",
        },
        {
            time: "Front End",
            corFundo: "#E8F8FF",
            corTime: "#82CFFA",
        },
        {
            time: "Data Science",
            corFundo: "#F0F8E2",
            corTime: "#A6D157",
        },
        {
            time: "Devops",
            corFundo: "#FDE7E8",
            corTime: "#E06B69",
        },
        {
            time: "UX e Design",
            corFundo: "#FFEEDF",
            corTime: "#DB6EBF",
        },
        {
            time: "Mobile",
            corFundo: "#FFF5D9",
            corTime: "#FFBA05",
        },
        {
            time: "Inovação e Gestão",
            corFundo: "#FFEEDF",
            corTime: "#FF8A29",
        },
    ];

    return (
        <div>
            <Banner />
            
            <Formulario 
                times={times.map(time => time.time)} 
                aoColaboradoresCadastrado={
                    colaborador => aoNovoColaboradorAdicionado(colaborador)
                }
            />
            
            {times.map((time) => (
                <Time 
                    key={time.time}
                    time={time.time} 
                    corFundo={time.corFundo} 
                    corTime={time.corTime}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.time)}
                />
            ))}

            <Rodape />
            
        </div>
    );
}

export default App;
