import React from 'react';
import '../styles/Components/TodosLoading.css'
const TodosLoading = () => {
    return (
        <div className="TodosLoading">
            <ul className='Loading-TodoList'>
                <li className='Loading-TodoItem'>
                    <p className='Loading-TodoItem-p'>
                        Cargando...
                    </p>
                </li>
            </ul>
        </div>
    );
}

export {TodosLoading};