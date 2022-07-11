import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import '../styles/Components/FoundResults.css'
const FoundResults = () => {
    return (
        <div className="FoundResults">
            <h3 className='Title__FoundResults'>No se encontraron resultados</h3>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon--List'/>
        </div>
    );
}

export {FoundResults};