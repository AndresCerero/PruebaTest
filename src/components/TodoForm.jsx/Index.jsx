import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    const onCancel = () => {
        setOpenModal(false)
    };

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    };

    return (
        <form onSubmit={onSubmit}>
            <label className="TodoForm__label">Escribe un tarea</label>
            <textarea
                placeholder="Escribe nueva tarea"
                className="TodoForm__textarea"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm__buttonContainer">
                <button
                    type="button"
                    className="TodoForm__button TodoForm__button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm__button TodoForm__button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }

