import React from 'react';
import Botao from './Botao.module.css'

class Button extends React.Component {
    render() {
        return (
            <button className={Botao['btn-alura']}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;