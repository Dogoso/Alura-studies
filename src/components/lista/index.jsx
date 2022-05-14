import React from 'react';

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
        <aside>
            <h1>Estudos do dia</h1>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>
                        <h2> {item.task} </h2>
                        <span> {item.time} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;