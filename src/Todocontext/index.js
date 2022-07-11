import React,{useState} from 'react'
import { useLocalStorage } from '../CustomHooks/useLocalStorage';

const TodoContext = React.createContext();//tenemos dows componentes


function TodoProvider(props) {
    const {
        item:todos, 
        Saveitem:saveTodos,
        loading,
        error,
        } = useLocalStorage('todos_v1',[]);
    
    const [searchValue,setsearchValue] = useState('');
    const [showModal,setshowModal] = useState(false);
    const completedTodos = todos.filter(todo => todo.completed === true).length;
    const totalTodos = todos.length;
    
      let searchTodos = []
    
      //funcion para buscar todos
      if (searchValue.length > 0) {
        searchTodos = todos.filter(todo => {
          const text = todo.text.toLowerCase();
          //devuelve un true si alguna de las palabras de la busqueda esta en el texto
          return text.includes(searchValue.toLowerCase()); 
        })
      }else{
        searchTodos = todos;
      }
    
      // Función para añadir un nuevo TODO
      const addTodo = (text) => { 
        todos.push({
          text,
          completed: false
        })
        saveTodos(todos);
      }  
    
      //funcion para marcar TODOS completados
      const completeTodo = (text) => { //reciibe el texto de la todo y filtramos por el texto y cambiamos el completed a true
        const newitem=todos.map(todo => {
            if (todo.text === text) {
              todo.completed = true;
            }
            return todo;
          }
          )
        saveTodos(newitem);
      }  
    //funcion para borrar TODOS
      const deleteTodo = (text) => {
        const newitem = todos.filter(todo => todo.text !== text) //filtra todos los que no sean iguales al texto que se recibe
        saveTodos(newitem);
      }  
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos ,
            addTodo,
            searchValue,
            setsearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            showModal,
            setshowModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider};