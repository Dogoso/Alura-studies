import ListaStyle from './Lista.module.css'

export default function Lista({task, time}) {
    return (
        <li className={ListaStyle['item-list']}>
            <h2> {task} </h2>
            <span> {time} </span>
        </li>
    )
}