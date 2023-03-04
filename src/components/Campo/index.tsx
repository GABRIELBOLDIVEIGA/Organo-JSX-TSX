import "./campo.css";
import React from "react";

interface CampoProps {
    aoAlterado: (valor: string) => void;
    label: string;
    valor: string;
    obrigatorio?: boolean;
    placeholder?: string;
    type?: "text" | "color" | "number" | "email" | "password" | "date";
}

const Campo = ({ type = "text", label, placeholder, valor, aoAlterado, obrigatorio = false }: CampoProps) => {

    const quandoMudar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                // onChange={(evento) => aoAlterado(evento.target.value)} // dessa forma não precisa passar a função para uma 
                onChange={quandoMudar} // dessa forma tem que passar a função para uma arrow function, util quando a função eh grande
                required={obrigatorio} 
                placeholder={placeholder} />
        </div>
    );
};

export default Campo;
