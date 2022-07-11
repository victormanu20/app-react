import React from 'react';
import '../styles/Components/NewTask.css'
const NewTask = () => {
    return (
        <form className='NewTask'>
            <label for='task_name'>Task name</label>
            <input type="text" name='task_name'/>
        </form>

    );
}
export {NewTask};