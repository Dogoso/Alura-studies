import React, { useState } from 'react';
import Item from './item'

function Lista({ itens }) {
    return (
        <aside className="col-12 mt-5">
            <h1 className="ms-5">Estudos do dia</h1>
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