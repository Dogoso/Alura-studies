import React from 'react';
import ListaStyle from './Lista.module.css'

function Lista() {
    const itens = [{
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'Spring Framework',
        time: '01:00:00'
    },
    {
        task: 'React Redux',
        time: '00:30:00'
    }]
    return (
        <aside className="col-md-5 mt-5">
            <h1 className="ms-5">Estudos do dia</h1>
            <ul>
                {itens.map((item, index) => (
                    <li className={ListaStyle['item-list']} key={index}>
                        <h2> {item.task} </h2>
                        <span> {item.time} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;