import React from 'react';
import '../styles/Components/CreateTodoButton.css'
import { TodoContext } from '../Todocontext';

const CreateTodoButton = () => {
  const {showModal,setshowModal,searchTodos} = React.useContext(TodoContext)
  const onClickBtn =() =>{
    if(showModal){
      setshowModal(false)
    }else{
      setshowModal(true)
    }
  }

  if(searchTodos.length === 0){
    console.log('vacio')
    return (
    <button className="CreateTodoButton ButtonVacio" onClick={onClickBtn} >
      +
    </button>
    )
  }else{
    return (
    <button className="CreateTodoButton add" onClick={onClickBtn} >
      +
    </button>
    )
  }
}

export {CreateTodoButton};