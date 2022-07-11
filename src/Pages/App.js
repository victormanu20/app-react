// import './App.css';
import React,{useState} from 'react';
import ReactDOM from "react-dom";
import { AppUI } from './AppUI';
import { TodoProvider } from '../Todocontext';
import '../styles/pages/App.css';

//  const DefaultTodos = [
//    {text:'Cortar cebolla', completed:true},
//    {text:'Tormar el curso de intro a react', completed:false},
//    {text:'Llorar con la llorona', completed:false}
//  ];



function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
