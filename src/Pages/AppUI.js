import React from 'react'
import { TodoContext } from '../Todocontext';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { CreateTodoForm } from '../Components/CreateTodoForm';
import {TodosError} from '../Components/TodosError';
import { TodosLoading } from '../Components/TodosLoading';
import {EmptyTodos} from '../Components/EmptyTodos';
import { Modal } from './Modal';
import { FoundResults } from '../Components/FoundResults';
const AppUI = () => {
    const {
        error,
        loading,
        searchTodos,
        totalTodos,
        completeTodo,
        deleteTodo,
        showModal
      } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {!loading && !error && !totalTodos && (
                <EmptyTodos />
            )}
            {!loading && totalTodos &&!searchTodos.length && (
                <FoundResults/>)} 

            { searchTodos.map((todo) => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)} //pasamos la funcion como propiedades
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
            </TodoList>
            {!!showModal && (
            <Modal>
                <CreateTodoForm/>
            </Modal>
            )}
            <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI};