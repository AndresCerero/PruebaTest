import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
    return (
        <button className='ButtonCreate'
            onClick={
                () => { setOpenModal(state => !state) }}> + </button>
    )
}

export { CreateTodoButton };