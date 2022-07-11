import React from 'react';
import '../styles/Components/TodoList.css'
const TodoList = (props) => {
    return (
      <section>
        <ul>{props.children}</ul>
      </section>
    );
}

export {TodoList};