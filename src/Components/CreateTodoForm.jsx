import React from 'react';
import { TodoContext } from '../Todocontext';
import '../styles/Components/CreateTodoForm.css';
const CreateTodoForm = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setshowModal
    } = React.useContext(TodoContext)
    const onSubmit = (event) => {
        event.preventDefault();//le quitamos el comportamiento por defecto de un formulario
        addTodo(newTodoValue);
        setshowModal(false);

    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

const onCancel = (e) => {
    setshowModal(false);
}
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Escribe tu nuevo TODO</label>
            <textarea 
                placeholder='Escribe aqui...'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button type='submit' className="TodoForm-button TodoForm-button--add" >Añadir</button>
                <button type='button' onClick={onCancel} className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
            </div>
        </form>
    );
}

export {CreateTodoForm};