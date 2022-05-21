import React from 'react';
import Botao from './Botao.module.css'

const Button = ({ onClick, type, children }) => {
    return (
        <button 
            className={`col-12 col-md-12 col-lg-5 ${Botao['btn-alura']}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;