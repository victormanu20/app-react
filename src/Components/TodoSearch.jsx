import '../styles/Components/TodoSearch.css'
import { TodoContext } from '../Todocontext';

import React from 'react';
const TodoSearch = () => {
const {searchValue,setsearchValue} = React.useContext(TodoContext)
  const onSearchValue = (event) =>{
    setsearchValue(event.target.value)
  }
  
  console.log(searchValue)
    return (
      <input
        className="TodoSearch"
        placeholder="Buscar"
        onChange={onSearchValue}
        value={searchValue}
      />
);
}

export {TodoSearch};