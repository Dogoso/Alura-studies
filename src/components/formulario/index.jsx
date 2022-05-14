import React from 'react';
import Button from '../botao'
import FormularioStyle from './Formulario.module.css'

class Formulario extends React.Component {

    render() {
        return (
            <div className="col-md-5 mt-5">
                <form>
                <h1>Nova tarefa</h1>
                <div>
                    <label htmlFor="estudo">Estudo</label>
                    <input 
                        className={`form-control ${FormularioStyle['input-alura']}`}
                        id="estudo" 
                        name="estudo" 
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="temporizador">Tempo de estudo</label>
                    <input 
                        className={`form-control ${FormularioStyle['input-alura']}`}
                        id="temporizador" 
                        name="temporizador" 
                        type="time" 
                        step="1"
                        min="00:00:00"
                        max="23:59:59" 
                        required 
                    />
                </div>
                <Button>
                    ADICIONAR
                </Button>
            </form>
            </div>
        )
    }

}

export default Formulario;