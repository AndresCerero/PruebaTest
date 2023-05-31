import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoLoading } from '../components/TodoLoading';
import { TodoError } from '../components/TodoError/Index';
import { TodoEmpy } from '../components/TodoEmpy/Index';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../Modal/Index';
import { useContext } from 'react';
import { TodoForm } from '../components/TodoForm.jsx/Index';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext)

    return (
        <div className='contenedor'>

            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {loading && (
                    <TodoLoading />
                )}
                {error && (
                    <TodoError />
                )}
                {(!loading && searchedTodos.length === 0) && <TodoEmpy />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </div>
    )
}

export { AppUI }