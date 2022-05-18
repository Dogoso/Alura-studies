import Button from '../botao'
import style from './Cronometro.module.css'
import Relogio from './relogio'

export default function Cronometro() {
    return (
        <div className="mt-5">
            <h2 className={style['cronometro-title']}>Escolha um card e inicie o cronômetro</h2>
            <div>
                <Relogio/>
            </div>
            <Button type="button">
                INICIAR
            </Button>
        </div>
    )
}