import Banner from 'components/Banner';
import Formulario from "components/Formulario";
import Rodape from "components/Rodape";
import Time from "components/Time";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import ITime from 'common/interface/ITime';
import timesMock from "json/times.json";
import colaboradoresMock from "json/colaboradores.json";

function App() {
    const [times, setTimes] = useState (timesMock)
    const [colaboradores, setColaboradores] = useState(colaboradoresMock);
   
    function deletarColaborador(id: string) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    function mudarCorDoTime(cor: string, id: string) {
        setTimes(times.map(time => {
            if(time.id === id) {
                time.cor = cor;
            }
            return time;
        }))
    }

    function cadastrarTime(novoTime: ITime) {
        setTimes([ ...times, { ...novoTime, id: uuidv4() } ])
    }

    function resolverFavorito(id: string) {
        setColaboradores(colaboradores.map(colaborador => {
            if(colaborador.id === id){
                colaborador.favorito = !colaborador.favorito
            }
            return colaborador
        }))
    }

    return (
        <div>
            <Banner 
                enderecoDaImagem="/imagens/banner.png"  textoAlternativo="Logo do Organo" 
            />

            <Formulario 
                cadastrarTime={cadastrarTime}
                times={times.map((time) => time.nome)} 
                aoCadastrar={(colaborador) => setColaboradores([...colaboradores, colaborador])} 
            />
            
            <section className="times">
                <h1>Minha organização</h1>
                {times.map((time) => (
                    <Time
                        mudarCor={mudarCorDoTime}
                        key={time.id} 
                        time={time} 
                        colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
                        aoDeletar={deletarColaborador}
                        aoFavoritar={resolverFavorito}
                    />
                ))}
            </section>
            
            <Rodape />
        </div>
    );
}

export default App;
