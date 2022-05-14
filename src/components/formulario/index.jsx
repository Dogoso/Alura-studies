import React from 'react';
import Button from '../botao'

class Formulario extends React.Component {

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="estudo">Estudo</label>
                    <input 
                        id="estudo" 
                        name="estudo" 
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="temporizador">Tempo de estudo</label>
                    <input 
                        id="temporizador" 
                        name="temporizador" 
                        type="time" 
                        step="1"
                        min="00:00:00"
                        max="23:59:59" 
                        required 
                    />
                </div>
                <Button/>
            </form>
        )
    }

}

export default Formulario;