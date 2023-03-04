import hexToRgba from 'hex-to-rgba';
import Colaborador from 'components/Colaborador'
import './time.css'
import React from 'react';
import IColaborador from 'common/interface/IColaborador';
import ITime from 'common/interface/ITime';

interface TimeProps {
    colaboradores: IColaborador[];
    time: ITime;
    aoDeletar: (id: string) => void;
    mudarCor: (cor: string, id: string) => void;
    aoFavoritar: (id: string) => void;
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
    return (
        colaboradores.length > 0 ? <section 
            className='time' 
            style={{ 
                backgroundImage: 'url(/imagens/fundo.png)',
                backgroundColor: hexToRgba(time.cor, "0.6")
            }}>

            <input 
                type="color"  
                className='input-color' 
                value={time.cor} 
                onChange={evento => mudarCor(evento.target.value, time.id)}
            />

            <h3 style={{ borderColor: time.cor }} > {time.nome} </h3>

            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={time.cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section> : <React.Fragment></React.Fragment>
    )
}

export default Time