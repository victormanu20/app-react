import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/Components/EmptyTodos.css'
const EmptyTodos = () => {
    return (
        <div className="EmptyTodos">
            <h3 className='Title__EmptyTodos'>Crea tu primer TODO</h3>
            <FontAwesomeIcon icon={faClipboardList} className='icon--List'/>
            <CreateTodoButton />
        </div>
        
    );
}

export {EmptyTodos};