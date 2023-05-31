import { MdOutlinePerson } from "react-icons/md";

import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className={`Card ${props.completed && "Card--completed"}`} >
            <button className='Card__Button'>
                <span className='Card__Button--cancel' onClick={props.onDelete}>X</span>
            </button>
            <p className={`Card__Content ${props.completed && "Card__Content--completed"}`} onClick={props.onComplete}><MdOutlinePerson className={`Card__Content--Icon ${props.completed && "Card__Content--Icon__Oculto"}`} />{props.text}</p>
        </li>

    )
}

export { TodoItem }