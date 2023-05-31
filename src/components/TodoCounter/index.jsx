import { useContext } from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const {
        completedTodos, 
        totalTodos,
    } = useContext(TodoContext)

    return (
        <h1 className='Counter__Title'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>
    )
}

export { TodoCounter };
