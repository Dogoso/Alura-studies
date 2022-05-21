import ListaStyle from './Lista.module.css'

export default function Lista({task, time, selected, done, id, setTask}) {
    return (
        <li 
            onClick={ () => done ? undefined : setTask(
                ({task, time, selected, done, id})
            )} 
            className={`${ListaStyle['item-list']} ${done ? ListaStyle['task-done'] : ''} ${selected ? ListaStyle['selected-item'] : ''}`}
        >
            <h2> {task} </h2>
            <span> {time} </span>
        </li>
    )
}