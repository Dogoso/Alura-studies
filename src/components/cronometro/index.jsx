import { useEffect, useState } from 'react'
import { timeInSeconds } from '../../common/utils/time_conversion'
import Button from '../botao'
import style from './Cronometro.module.css'
import Relogio from './relogio'

export default function Cronometro({ setSelected, setItens ,selected }) {

    const selectedTime = () => selected != undefined ? timeInSeconds(selected.time) : 0

    const [curTime, setCurTime] = useState(
        selectedTime()
    )

    useEffect(() => {
        setCurTime(selectedTime())
    }, [selected])

    const startCount = (curTime) => {
        setTimeout(() => {
            if(curTime > 0) {
                setCurTime(curTime - 1)
                return startCount(curTime - 1)
            }
            setItens(itens => itens.map(item => {
                if(item.id === selected.id) {
                    selected.selected = false
                    selected.done = true
                    return selected
                }else {
                    return item;
                }
            }))
            setSelected(undefined)
        }, 1000)
    }

    return (
        <div className="mt-5">
            <h2 className={style['cronometro-title']}>
                Escolha um card e inicie o cronômetro
            </h2>
            <div>
                <Relogio curTime={curTime} />
            </div>
            <Button onClick={() => { startCount(curTime) }} type="button">
                INICIAR
            </Button>
        </div>
    )
}