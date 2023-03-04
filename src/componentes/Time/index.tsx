import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import Colaborador from '../Colaborador';
import "./Time.css";

interface TimeProps {
    corPrimaria: string;
    corSecundaria: string;
    nome: string; // nome do time ñ do colaborador

    colaboradores: IColaborador[];
    // colaboradores: { nome: string, cargo: string, imagem: string, data: string }[]
    // IColaborador eh uma inteface criada para nao precisar escrever como 
    //na linha de cima, neste case vale apena criar essa inteface pois 
    //IColaborador pode ser utilizado em outra parte da aplicacao
}


const Time = (props: TimeProps) => {
    const css = { backgroundColor: props.corSecundaria };

    return props.colaboradores.length > 0 ? (
        <section className="time" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        corDeFundo={props.corPrimaria} 
                        key={colaborador.nome} 
                        // nome={colaborador.nome} 
                        // cargo={colaborador.cargo} 
                        // imagem={colaborador.imagem} 
                        // data={colaborador.data} 
                        colaborador={colaborador}
                    />
                ))}
            </div>
        </section>
    ) : (
        <></>
    );
};

export default Time;
