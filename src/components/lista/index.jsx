import React, { useState } from 'react';
import Item from './item'

function Lista({ itens, setTask }) {
    return (
        <aside className="col-12 mt-5">
            <h1 className="ms-5">Estudos do dia</h1>
            <ul>
                {itens.map(item => (
                    <Item
                        key={item.id}
                        task={item.task}
                        time={item.time}
                        selected={item.selected}
                        done={item.done}
                        id={item.id}
                        setTask={setTask}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;