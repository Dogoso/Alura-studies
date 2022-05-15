import React, { useState } from 'react';
import Item from './item'

function Lista() {
    const [itens, setItens] = useState([{
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
    }])
    return (
        <aside className="col-12 mt-5">
            <h1 onClick={
                () => setItens([...itens, {task: 'VueJs', time: '00:10:00'}])
            }
                className="ms-5">Estudos do dia</h1>
            <ul>
                {itens.map((item, index) => (
                    <Item
                        key={index}
                        task={item.task}
                        time={item.time}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;