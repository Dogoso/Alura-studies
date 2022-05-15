import React from 'react';
import Botao from './Botao.module.css'

class Button extends React.Component {
    render() {
        return (
            <button className={`col-12 col-md-12 col-lg-5 ${Botao['btn-alura']}`}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;