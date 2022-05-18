import React from 'react';
import Button from '../botao'
import FormularioStyle from './Formulario.module.css'

class Formulario extends React.Component {

    state = {
        task: '',
        time: '00:00:00'
    }

    addTask(event) {
        event.preventDefault()
        this.props.setItens(itens => [...itens, { ...this.state }])
        console.log(this.state)
    }

    render() {
        return (
            <div className="col-12 mt-5">
                <form onSubmit={this.addTask.bind(this)}>
                <h1>Nova tarefa</h1>
                <div>
                    <label htmlFor="estudo">Estudo</label>
                    <input 
                        className={`form-control ${FormularioStyle['input-alura']}`}
                        id="estudo" 
                        name="estudo"
                        value={ this.state.task }
                        onChange={ eventTriggered => this.setState({ task: eventTriggered.target.value })} 
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
                        value={ this.state.time }
                        onChange={ eventTriggered => this.setState({ time: eventTriggered.target.value }) } 
                        min="00:00:00"
                        max="23:59:59" 
                        required 
                    />
                </div>
                <Button type='submit'>
                    ADICIONAR
                </Button>
            </form>
            </div>
        )
    }

}

export default Formulario;