import React from 'react'
import { TodoContext } from '../Todocontext';
import '../styles/Components/TodoCounter.css'
const TodoCounter = () => {
    const {totalTodos,completedTodos} = React.useContext(TodoContext)
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2>
    );
}

export {TodoCounter};