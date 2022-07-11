import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBomb} from '@fortawesome/free-solid-svg-icons'

const TodosError = () => {
    return (
        <div className="TodosError">
        <h3 className='Title__TodosError'>ERROR</h3>
        <div>
        <FontAwesomeIcon icon={faBomb} className='icon--List'/>
        </div>
    </div>
    );
}

export {TodosError};