import React, { useState } from 'react';
import Button from '../botao'
import FormularioStyle from './Formulario.module.css'
import { v4 as v4uuid } from 'uuid'

const Formulario = ({ setItens }) => {

    const [task, setTask] = useState({
        task: '',
        time: '00:00:00'
    })

    const addTask = (event) => {
        event.preventDefault()
        setItens(itens => [
                ...itens, 
                {
                    ...task,
                    selected: false,
                    done: false,
                    id: v4uuid()
                }
            ]
        )
        setTask({
            task: '',
            time: '00:00:00'
        })
    }

    return (
        <div className="col-12 mt-5">
            <form onSubmit={ addTask }>
            <h1>Nova tarefa</h1>
            <div>
                <label htmlFor="estudo">Estudo</label>
                <input 
                    className={`form-control ${FormularioStyle['input-alura']}`}
                    id="estudo" 
                    name="estudo"
                    value={ task.task }
                    onChange={ eventTriggered => setTask({ ...task, task: eventTriggered.target.value })} 
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
                    value={ task.time }
                    onChange={ eventTriggered => setTask({ ...task ,time: eventTriggered.target.value }) } 
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

export default Formulario;